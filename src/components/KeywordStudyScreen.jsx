import { useState, useMemo } from 'react'
import { keywords, KEYWORD_LECTURES } from '../data/toxicology_keywords.js'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// 키워드에서 검색 가능한 핵심 한국어/영어 단어 추출
function extractTerm(keyword) {
  // "생체축적 (bio-accumulation)" → "생체축적"
  let t = keyword.split(' (')[0].trim()
  // "바이오마커 — 노출 바이오마커" → "노출 바이오마커"
  if (t.includes(' — ')) t = t.split(' — ').pop().trim()
  // "반도체 실리콘 웨이퍼 생산 — 잉곳 (Ingot)" 같은 경우도 처리됨
  return t
}

// 설명에서 키워드 단어를 빈칸 박스로 대체하는 컴포넌트
function DescriptionText({ text, keyword, revealed }) {
  if (revealed) return <>{text}</>

  const term = extractTerm(keyword)
  if (!term || !text.includes(term)) return <>{text}</>

  const parts = text.split(term)
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <span
              className="inline-block bg-violet-100 border border-violet-300 rounded px-1.5 mx-0.5 text-transparent select-none align-middle"
              style={{ fontSize: '0.85em', lineHeight: '1.4' }}
              aria-label="빈칸"
            >
              {term}
            </span>
          )}
        </span>
      ))}
    </>
  )
}

export default function KeywordStudyScreen({ subject, onHome }) {
  const [lectureFilter, setLectureFilter] = useState('all')
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [shuffled, setShuffled] = useState(false)

  const filtered = useMemo(() => {
    const base = lectureFilter === 'all'
      ? keywords
      : keywords.filter(k => k.lecture === lectureFilter)
    return shuffled ? shuffle(base) : base
  }, [lectureFilter, shuffled])

  const total = filtered.length
  const card = filtered[index] ?? null

  const go = (delta) => {
    setIndex(i => Math.max(0, Math.min(total - 1, i + delta)))
    setRevealed(false)
  }

  const handleLectureChange = (id) => {
    setLectureFilter(id)
    setIndex(0)
    setRevealed(false)
  }

  const handleShuffle = () => {
    setShuffled(s => !s)
    setIndex(0)
    setRevealed(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100 flex flex-col">
      {/* 헤더 */}
      <div className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur border-b border-violet-100">
        <button
          onClick={onHome}
          className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors shadow-sm flex-shrink-0"
          aria-label="홈으로"
        >
          ←
        </button>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-bold uppercase tracking-widest text-violet-500">
            🧪 산업독성학
          </div>
          <h1 className="text-lg font-black text-gray-900">키워드 공부하기</h1>
        </div>
        <div className="text-sm font-bold text-violet-600">
          {index + 1} / {total}
        </div>
      </div>

      {/* 강의 필터 */}
      <div className="px-4 py-3 bg-white/60 border-b border-violet-100 overflow-x-auto">
        <div className="flex gap-2 min-w-max">
          {KEYWORD_LECTURES.map(lec => (
            <button
              key={lec.id}
              onClick={() => handleLectureChange(lec.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                lectureFilter === lec.id
                  ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-sm'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-violet-300'
              }`}
            >
              {lec.label}
            </button>
          ))}
        </div>
      </div>

      {/* 진행 바 */}
      <div className="h-1 bg-violet-100">
        <div
          className="h-full bg-gradient-to-r from-violet-500 to-purple-600 transition-all duration-300"
          style={{ width: total > 0 ? `${((index + 1) / total) * 100}%` : '0%' }}
        />
      </div>

      {/* 카드 영역 */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 gap-4">
        {card ? (
          <>
            {/* 강의 배지 */}
            <div className="text-xs font-bold text-violet-500 bg-violet-100 px-3 py-1 rounded-full">
              {card.lecture}
            </div>

            {/* 카드 */}
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg shadow-violet-200/50 overflow-hidden">
              {/* 설명/사례 영역 */}
              <div className="p-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                  {card.mode === 'reverse' ? '사고 사례' : '설명'}
                </p>
                {card.mode === 'reverse' && (
                  <p className="text-xs text-violet-500 font-semibold mb-2">이 사고의 원인 물질·개념은?</p>
                )}
                <p className="text-gray-700 leading-relaxed text-[15px]">
                  {card.mode === 'reverse'
                    ? card.description
                    : <DescriptionText text={card.description} keyword={card.keyword} revealed={revealed} />}
                </p>
              </div>

              <div className="border-t border-dashed border-violet-100" />

              {/* 키워드 영역 */}
              <div className="p-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">키워드</p>
                <div className="relative">
                  {revealed ? (
                    <p className="text-xl font-black text-violet-700">{card.keyword}</p>
                  ) : (
                    <div className="h-8 rounded-lg bg-violet-100 flex items-center px-3">
                      <span className="text-violet-400 text-sm font-semibold">탭하여 키워드 확인 →</span>
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setRevealed(r => !r)}
                  className={`mt-4 w-full py-3 rounded-xl font-bold text-sm transition-all active:scale-95 ${
                    revealed
                      ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      : 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-md hover:brightness-105'
                  }`}
                >
                  {revealed ? '🙈 키워드 가리기' : '👁️ 키워드 보기'}
                </button>
              </div>
            </div>

            {/* 이전 / 다음 버튼 */}
            <div className="flex gap-3 w-full max-w-lg">
              <button
                onClick={() => go(-1)}
                disabled={index === 0}
                className="flex-1 py-3 rounded-xl font-bold text-sm bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95 shadow-sm"
              >
                ← 이전
              </button>
              <button
                onClick={() => go(1)}
                disabled={index === total - 1}
                className="flex-1 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-violet-500 to-purple-600 text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-95 shadow-md hover:brightness-105"
              >
                다음 →
              </button>
            </div>

            {/* 셔플 버튼 */}
            <button
              onClick={handleShuffle}
              className={`text-sm font-semibold px-4 py-2 rounded-full transition-all ${
                shuffled
                  ? 'bg-violet-100 text-violet-700'
                  : 'text-gray-400 hover:text-violet-500'
              }`}
            >
              🔀 {shuffled ? '순서 섞기 ON' : '순서 섞기'}
            </button>
          </>
        ) : (
          <p className="text-gray-400">해당 강의에 키워드가 없습니다.</p>
        )}
      </div>
    </div>
  )
}
