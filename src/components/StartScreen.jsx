import { useMemo, useState } from 'react'

const COUNT_OPTIONS = [10, 20, 30, 50, 999]

function shuffle(items) {
  const arr = [...items]
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

function shuffleMultipleOptions(question) {
  if (question.type !== 'multiple' || !Array.isArray(question.options)) return question

  const options = question.options.map((text, index) => ({
    text,
    wasCorrect: index === question.answer,
  }))
  const shuffled = shuffle(options)

  return {
    ...question,
    options: shuffled.map(option => option.text),
    answer: shuffled.findIndex(option => option.wasCorrect),
  }
}

export default function StartScreen({ subject, onStart, onBack, onKeywordStudy }) {
  const hasMultipleTypes = subject.types.length > 2
  const [lecture, setLecture] = useState('all')
  const [type, setType] = useState('all')
  const [count, setCount] = useState(20)

  const pool = useMemo(() => {
    let qs = subject.questions
    if (lecture !== 'all') qs = qs.filter(q => q.lecture === lecture)
    if (type !== 'all') qs = qs.filter(q => q.type === type)
    return qs
  }, [subject, lecture, type])

  const effectiveCount = count === 999 ? pool.length : Math.min(count, pool.length)

  const handleStart = () => {
    onStart({
      questions: shuffle(pool).slice(0, effectiveCount).map(shuffleMultipleOptions),
      lecture,
      type,
      count: effectiveCount,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md animate-fadeInUp">
        <div className="flex items-center gap-3 mb-8">
          {onBack && (
            <button
              onClick={onBack}
              className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors shadow-sm flex-shrink-0"
              aria-label="과목 선택으로 돌아가기"
            >
              ←
            </button>
          )}
          <div>
            <div className={`text-xs font-bold uppercase tracking-widest ${subject.accent}`}>
              {subject.icon} {subject.subtitle}
            </div>
            <h1 className="text-xl font-black text-gray-900">{subject.label}</h1>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg shadow-black/5 p-6 space-y-6">
          <section>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">강의 범위</p>
            <div className="flex flex-wrap gap-2">
              {subject.lectures.map(item => (
                <button
                  key={item.id}
                  onClick={() => setLecture(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                    lecture === item.id
                      ? `bg-gradient-to-r ${subject.gradient} text-white shadow-sm`
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {item.label ?? item.id}
                </button>
              ))}
            </div>
          </section>

          {hasMultipleTypes && (
            <section>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">문제 유형</p>
              <div className="flex flex-wrap gap-2">
                {subject.types.map(item => (
                  <button
                    key={item.id}
                    onClick={() => setType(item.id)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                      type === item.id
                        ? `bg-gradient-to-r ${subject.gradient} text-white shadow-sm`
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {item.icon ? `${item.icon} ` : ''}{item.label ?? item.id}
                  </button>
                ))}
              </div>
            </section>
          )}

          <section>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">문제 수</p>
            <div className="flex flex-wrap gap-2">
              {COUNT_OPTIONS.map(value => {
                const disabled = value !== 999 && value > pool.length
                return (
                  <button
                    key={value}
                    onClick={() => !disabled && setCount(value)}
                    disabled={disabled}
                    className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all ${
                      count === value
                        ? `bg-gradient-to-r ${subject.gradient} text-white shadow-sm`
                        : disabled
                          ? 'bg-gray-50 text-gray-300 cursor-not-allowed'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {value === 999 ? '전체' : `${value}문제`}
                  </button>
                )
              })}
            </div>
          </section>

          <div className={`rounded-xl ${subject.bg} px-4 py-3 text-sm`}>
            <span className="text-gray-500">선택된 문제: </span>
            <span className={`font-black text-lg ${subject.accent}`}>{pool.length}</span>
            <span className="text-gray-500">문제 중 </span>
            <span className={`font-black text-lg ${subject.accent}`}>{effectiveCount}</span>
            <span className="text-gray-500">문제 출제</span>
          </div>

          <button
            onClick={handleStart}
            disabled={pool.length === 0}
            className={`w-full py-4 rounded-xl font-black text-white text-lg shadow-lg transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed bg-gradient-to-r ${subject.gradient} hover:shadow-xl hover:brightness-105`}
          >
            퀴즈 시작하기 →
          </button>

          {onKeywordStudy && (
            <button
              onClick={onKeywordStudy}
              className="w-full py-3 rounded-xl font-bold text-sm border-2 border-violet-300 text-violet-600 hover:bg-violet-50 transition-all active:scale-95"
            >
              📖 키워드 공부하기
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
