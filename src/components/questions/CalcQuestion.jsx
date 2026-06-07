import { useState } from 'react'

function parseNumber(value) {
  const normalized = String(value)
    .trim()
    .replace(/,/g, '')
    .replace(/×/g, 'x')
    .replace(/\s+/g, '')
    .replace(/([0-9.]+)x10\^?(-?[0-9]+)/i, '$1e$2')
  const match = normalized.match(/[-+]?(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?/i)
  return match ? Number(match[0]) : Number.NaN
}

export default function CalcQuestion({ q, answered, onAnswer }) {
  const [value, setValue] = useState('')
  const [isCorrect, setIsCorrect] = useState(null)

  const handleSubmit = () => {
    if (answered || !value.trim()) return
    const userNumber = parseNumber(value)
    const target = Number(q.answer)
    const tolerance = q.tolerance ?? Math.abs(target) * 0.03
    const correct = Number.isFinite(userNumber) && Math.abs(userNumber - target) <= tolerance
    setIsCorrect(correct)
    onAnswer(correct, value)
  }

  const borderCls = !answered
    ? 'border-gray-200 focus:border-emerald-400'
    : isCorrect
      ? 'border-emerald-400 bg-emerald-50'
      : 'border-rose-400 bg-rose-50'

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <label className="text-xs font-semibold text-emerald-600">계산 결과를 숫자로 입력하세요</label>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          disabled={answered}
          placeholder={q.unit ? `숫자만 입력 (${q.unit})` : '숫자만 입력'}
          className={`w-full px-4 py-3 rounded-xl border-2 text-gray-800 font-medium text-sm outline-none transition-all disabled:cursor-not-allowed ${borderCls}`}
        />
      </div>

      {!answered && (
        <button
          onClick={handleSubmit}
          disabled={!value.trim()}
          className="w-full py-3 bg-emerald-500 text-white rounded-xl font-bold hover:bg-emerald-600 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          제출하기
        </button>
      )}

      {answered && (
        <div className="text-sm text-gray-600 bg-gray-50 rounded-xl p-3">
          <span className="font-semibold text-gray-700">정답: </span>
          <span className="text-gray-800">{q.answerText ?? `${q.answer}${q.unit ? ` ${q.unit}` : ''}`}</span>
          {q.tolerance && <span className="text-xs text-gray-400 ml-2">(허용오차 ±{q.tolerance})</span>}
        </div>
      )}
    </div>
  )
}
