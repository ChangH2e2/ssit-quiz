const TYPE_BADGE = {
  multiple: { label: '4지선다', cls: 'bg-blue-100 text-blue-700' },
  fill: { label: '빈칸', cls: 'bg-indigo-100 text-indigo-700' },
  short: { label: '주관식', cls: 'bg-orange-100 text-orange-700' },
  match: { label: '단답형', cls: 'bg-rose-100 text-rose-700' },
  calc: { label: '계산 단답', cls: 'bg-emerald-100 text-emerald-700' },
}

const DIFFICULTY_BADGE = {
  basic: { label: '기초', cls: 'bg-emerald-50 text-emerald-700 border-emerald-100' },
  standard: { label: '표준', cls: 'bg-amber-50 text-amber-700 border-amber-100' },
  advanced: { label: '심화', cls: 'bg-rose-50 text-rose-700 border-rose-100' },
}

const LABELS = ['①', '②', '③', '④']

function SourceReference({ source, subject }) {
  if (!source) return null
  return (
    <div className="mt-3 rounded-xl border border-gray-100 bg-white/70 p-3">
      <p className="text-xs font-bold text-gray-500 mb-1">근거 자료</p>
      <p className={`text-xs font-bold ${subject.accent}`}>{source.label}</p>
      {source.detail && <p className="text-xs text-gray-500 leading-relaxed mt-1">{source.detail}</p>}
      {source.image && (
        <img
          src={source.image}
          alt={source.label}
          className="mt-3 w-full max-h-72 object-contain rounded-lg border border-gray-100 bg-gray-50"
          loading="lazy"
        />
      )}
    </div>
  )
}

function getCorrectAnswer(q) {
  if (q.type === 'multiple') return `${LABELS[q.answer]} ${q.options[q.answer]}`
  if (q.type === 'fill') return q.answers.map(answerSet => answerSet[0]).join(' / ')
  if (q.type === 'match') return q.answer
  if (q.type === 'calc') return q.answerText ?? `${q.answer}${q.unit ? ` ${q.unit}` : ''}`
  return q.modelAnswer
}

export default function ResultScreen({ subject, results, onRestart, onRestartSame, onHome }) {
  const { total, log } = results
  const correct = log.filter(item => item.correct === true).length
  const wrong = log.filter(item => item.correct === false)
  const skipped = Math.max(0, total - log.length)
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0

  let grade = { emoji: '🔥', label: '완벽에 가까워요!', cls: 'text-orange-500' }
  if (pct < 90) grade = { emoji: '😊', label: '좋아요, 조금만 더!', cls: 'text-emerald-500' }
  if (pct < 70) grade = { emoji: '📝', label: '오답 위주로 다시 보면 돼요', cls: 'text-blue-500' }
  if (pct < 50) grade = { emoji: '🌱', label: '기초부터 다시 잡아볼게요', cls: 'text-violet-500' }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 flex flex-col items-center p-4 pb-12">
      <div className="w-full max-w-lg">
        <div className="text-center py-8 animate-fadeInUp">
          <div className="text-5xl mb-2">{grade.emoji}</div>
          <h2 className={`text-2xl font-black ${grade.cls}`}>{grade.label}</h2>
          <p className="text-gray-500 text-sm mt-1">{subject.label}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg shadow-black/5 p-6 mb-5 animate-fadeInUp">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-5xl font-black text-gray-900">{pct}<span className="text-2xl text-gray-400">%</span></div>
              <div className="text-gray-500 text-sm">{correct} / {total} 정답</div>
            </div>
            <div className="text-right space-y-1">
              <div className="text-sm"><span className="text-emerald-600 font-bold">{correct}</span> <span className="text-gray-400">정답</span></div>
              <div className="text-sm"><span className="text-rose-600 font-bold">{wrong.length}</span> <span className="text-gray-400">오답</span></div>
              {skipped > 0 && (
                <div className="text-sm"><span className="text-gray-600 font-bold">{skipped}</span> <span className="text-gray-400">미응답</span></div>
              )}
            </div>
          </div>

          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${subject.gradient} rounded-full transition-all duration-700`}
              style={{ width: `${pct}%` }}
            />
          </div>

          <div className="flex gap-3 mt-5">
            <button
              onClick={onHome}
              className="flex-none px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-500 text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              홈
            </button>
            <button
              onClick={onRestart}
              className="flex-1 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-bold text-sm hover:bg-gray-50 transition-colors"
            >
              문제 설정
            </button>
            <button
              onClick={onRestartSame}
              className={`flex-1 py-3 rounded-xl font-bold text-white text-sm active:scale-95 transition-all bg-gradient-to-r ${subject.gradient} hover:brightness-105`}
            >
              같은 조건 다시
            </button>
          </div>
        </div>

        {wrong.length > 0 && (
          <div className="space-y-4 animate-fadeInUp">
            <h3 className="font-black text-gray-700 px-1">틀린 문제 {wrong.length}개</h3>
            {wrong.map(({ q, userValue }, index) => {
              const badge = TYPE_BADGE[q.type] ?? { label: q.type, cls: 'bg-gray-100 text-gray-600' }
              const difficultyBadge = DIFFICULTY_BADGE[q.difficulty]
              return (
                <div key={`${q.subject}-${q.id}-${index}`} className="bg-white rounded-2xl shadow-sm shadow-black/5 p-5">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${badge.cls}`}>{badge.label}</span>
                    {difficultyBadge && (
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${difficultyBadge.cls}`}>
                        {difficultyBadge.label}
                      </span>
                    )}
                    <span className="text-xs text-gray-400">{q.lecture}</span>
                    {q.category && <span className="text-xs text-gray-400">· {q.category}</span>}
                  </div>

                  <p className="text-gray-800 font-semibold text-sm leading-relaxed mb-3 whitespace-pre-line">
                    {q.question}
                  </p>

                  <div className="space-y-1.5 text-sm">
                    {userValue && (
                      <div className="flex gap-2 items-start">
                        <span className="text-rose-400 font-bold flex-shrink-0">내 답:</span>
                        <span className="text-rose-600">{userValue}</span>
                      </div>
                    )}
                    <div className="flex gap-2 items-start">
                      <span className="text-emerald-500 font-bold flex-shrink-0">정답:</span>
                      <span className="text-emerald-700 font-medium whitespace-pre-line">{getCorrectAnswer(q)}</span>
                    </div>
                  </div>

                  {q.explanation && (
                    <div className={`mt-3 p-3 rounded-xl ${subject.bg} text-xs text-gray-600 leading-relaxed whitespace-pre-line`}>
                      {q.explanation}
                      <SourceReference source={q.source} subject={subject} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
