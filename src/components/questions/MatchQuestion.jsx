import { useState } from 'react'

const SUB_MAP = {
  '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
  '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9',
  '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
  '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
  '⁺': '+', '⁻': '-',
}

function normalize(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[₀₁₂₃₄₅₆₇₈₉⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]/g, char => SUB_MAP[char] ?? char)
    .replace(/[^a-z0-9가-힣]/g, '')
}

export default function MatchQuestion({ q, answered, onAnswer }) {
  const [value, setValue] = useState('')
  const [isCorrect, setIsCorrect] = useState(null)
  const accepts = q.accepts || [q.answer]

  const handleSubmit = () => {
    if (answered || !value.trim()) return
    const current = normalize(value)
    const correct = accepts.some(answer => normalize(answer) === current)
    setIsCorrect(correct)
    onAnswer(correct, value)
  }

  let borderClass = 'border-gray-200 focus:border-rose-400'
  if (answered) borderClass = isCorrect ? 'border-emerald-400 bg-emerald-50' : 'border-rose-400 bg-rose-50'

  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <label className="text-xs font-semibold text-rose-500">
          답을 직접 입력하세요. 순서형은 화살표나 쉼표로 구분해도 됩니다.
        </label>
        <input
          type="text"
          value={value}
          onChange={event => setValue(event.target.value)}
          onKeyDown={event => event.key === 'Enter' && !answered && handleSubmit()}
          disabled={answered}
          placeholder="용어, 순서, 약자, 영문 모두 가능"
          className={`w-full px-4 py-3 rounded-xl border-2 text-gray-800 font-medium text-sm outline-none transition-all disabled:cursor-not-allowed ${borderClass}`}
        />
      </div>

      {!answered && (
        <button
          onClick={handleSubmit}
          disabled={!value.trim()}
          className="w-full py-3 bg-rose-500 text-white rounded-xl font-bold hover:bg-rose-600 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          제출하기
        </button>
      )}

      {answered && (
        <div className="text-sm text-gray-600 bg-gray-50 rounded-xl p-3">
          <span className="font-semibold text-gray-700">정답: </span>
          <span className="text-gray-800">{q.answer}</span>
          {accepts.length > 1 && (
            <span className="text-xs text-gray-400 ml-2">
              인정 답안: {accepts.slice(1).join(', ')}
            </span>
          )}
        </div>
      )}
    </div>
  )
}
