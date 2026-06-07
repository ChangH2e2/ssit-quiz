import { useState } from 'react'
import FillQuestion from './questions/FillQuestion.jsx'
import ShortQuestion from './questions/ShortQuestion.jsx'
import MatchQuestion from './questions/MatchQuestion.jsx'
import CalcQuestion from './questions/CalcQuestion.jsx'

const TYPE_BADGE = {
  multiple: { label: '4지선다', cls: 'bg-blue-100 text-blue-700' },
  fill: { label: '빈칸', cls: 'bg-indigo-100 text-indigo-700' },
  short: { label: '주관식', cls: 'bg-orange-100 text-orange-700' },
  match: { label: '단답형', cls: 'bg-rose-100 text-rose-700' },
  calc: { label: '계산 단답', cls: 'bg-emerald-100 text-emerald-700' },
}

const LABELS = ['①', '②', '③', '④']

export default function QuizScreen({ subject, settings, onFinish, onHome }) {
  const { questions } = settings
  const [idx, setIdx] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selected, setSelected] = useState(null)
  const [isCorrect, setIsCorrect] = useState(null)
  const [log, setLog] = useState([])

  const q = questions[idx]
  const progress = ((idx + (answered ? 1 : 0)) / questions.length) * 100
  const score = log.filter(item => item.correct === true).length
  const badge = TYPE_BADGE[q.type] ?? { label: q.type, cls: 'bg-gray-100 text-gray-600' }

  const handleAnswer = (correct, userValue) => {
    if (answered) return
    setIsCorrect(correct)
    setAnswered(true)
    setLog(prev => [...prev, { q, correct, userValue }])
  }

  const handleSelectMultiple = (optionIndex) => {
    if (answered) return
    const correct = optionIndex === q.answer
    setSelected(optionIndex)
    setIsCorrect(correct)
    setAnswered(true)
    setLog(prev => [...prev, { q, correct, userValue: q.options[optionIndex] }])
  }

  const handleNext = () => {
    if (idx + 1 >= questions.length) {
      onFinish({ total: questions.length, log })
      return
    }
    setIdx(value => value + 1)
    setAnswered(false)
    setSelected(null)
    setIsCorrect(null)
  }

  const handleFinishEarly = () => {
    onFinish({ total: questions.length, log })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100 flex flex-col items-center p-4 pb-8">
      <div className="w-full max-w-lg">
        <div className="flex items-center gap-3 py-4 mb-4">
          <button
            onClick={onHome}
            className="w-9 h-9 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors shadow-sm flex-shrink-0 text-sm"
            aria-label="홈으로 이동"
          >
            🏠
          </button>
          <div className="flex-1">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span className={`font-bold ${subject.accent}`}>{subject.label}</span>
              <span>{idx + 1} / {questions.length}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${subject.gradient} rounded-full transition-all duration-500`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          <div className={`font-black text-sm px-2 py-1 rounded-lg ${subject.bg} ${subject.accent}`}>
            {score}점
          </div>
        </div>

        <div key={q.id} className="bg-white rounded-2xl shadow-lg shadow-black/5 p-6 animate-fadeInUp">
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${badge.cls}`}>
              {badge.label}
            </span>
            <span className="text-xs text-gray-400 font-medium">{q.lecture}</span>
            {q.category && <span className="text-xs text-gray-400">· {q.category}</span>}
          </div>

          <p className="text-gray-900 font-semibold text-base leading-relaxed mb-6 whitespace-pre-line">
            {q.question}
          </p>

          {q.type === 'multiple' && (
            <div className="space-y-2.5">
              {q.options.map((option, optionIndex) => {
                let cls = 'border-gray-200 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                if (answered) {
                  if (optionIndex === q.answer) cls = 'border-emerald-400 bg-emerald-50 text-emerald-800'
                  else if (optionIndex === selected) cls = 'border-rose-400 bg-rose-50 text-rose-700'
                  else cls = 'border-gray-100 text-gray-400 opacity-60'
                }
                return (
                  <button
                    key={optionIndex}
                    onClick={() => handleSelectMultiple(optionIndex)}
                    disabled={answered}
                    className={`w-full text-left px-4 py-3 rounded-xl border-2 font-medium text-sm transition-all flex items-start gap-3 disabled:cursor-not-allowed ${cls}`}
                  >
                    <span className="font-black text-base leading-none mt-0.5 flex-shrink-0">{LABELS[optionIndex]}</span>
                    <span className="leading-relaxed">{option}</span>
                  </button>
                )
              })}
            </div>
          )}

          {q.type === 'fill' && <FillQuestion q={q} answered={answered} onAnswer={handleAnswer} />}
          {q.type === 'short' && <ShortQuestion q={q} answered={answered} onAnswer={handleAnswer} />}
          {q.type === 'match' && <MatchQuestion q={q} answered={answered} onAnswer={handleAnswer} />}
          {q.type === 'calc' && <CalcQuestion q={q} answered={answered} onAnswer={handleAnswer} />}

          {answered && q.explanation && (
            <div className={`mt-5 p-4 rounded-xl ${subject.bg} border border-gray-100 animate-popIn`}>
              <p className="text-xs font-bold text-gray-500 mb-1">해설</p>
              <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{q.explanation}</p>
            </div>
          )}

          {answered && isCorrect !== null && (
            <div className={`mt-4 text-center font-black text-lg animate-popIn ${isCorrect ? 'text-emerald-500' : 'text-rose-500'}`}>
              {isCorrect ? '정답!' : '오답'}
            </div>
          )}

          {answered && (
            <div className="mt-5 flex gap-3 animate-fadeInUp">
              {idx + 1 < questions.length && log.length > 0 && (
                <button
                  onClick={handleFinishEarly}
                  className="flex-none px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-500 text-sm font-semibold hover:bg-gray-100 transition-colors"
                >
                  여기서 종료
                </button>
              )}
              <button
                onClick={handleNext}
                className={`flex-1 py-3 rounded-xl font-black text-white text-sm transition-all active:scale-95 bg-gradient-to-r ${subject.gradient} hover:brightness-105`}
              >
                {idx + 1 >= questions.length ? '결과 보기 →' : '다음 문제 →'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
