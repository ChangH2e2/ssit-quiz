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
    .replace(/[^a-z0-9가-힣+\-]/g, '')
}

export default function FillQuestion({ q, answered, onAnswer }) {
  const [values, setValues] = useState(q.blanks.map(() => ''))
  const [result, setResult] = useState(null)

  const handleChange = (index, value) => {
    const next = [...values]
    next[index] = value
    setValues(next)
  }

  const handleSubmit = () => {
    if (answered) return
    const correct = q.answers.every((acceptedList, index) =>
      acceptedList.some(answer => normalize(answer) === normalize(values[index])),
    )
    setResult(correct)
    onAnswer(correct, values.join(', '))
  }

  return (
    <div className="space-y-4">
      {q.blanks.map((blank, index) => {
        let borderClass = 'border-gray-200 focus:border-indigo-400'
        if (answered) borderClass = result ? 'border-emerald-400 bg-emerald-50' : 'border-rose-400 bg-rose-50'

        return (
          <div key={blank.id} className="space-y-1">
            <label className="text-xs font-semibold text-gray-500">{blank.label} 빈칸</label>
            <input
              type="text"
              value={values[index]}
              onChange={event => handleChange(index, event.target.value)}
              onKeyDown={event => event.key === 'Enter' && !answered && handleSubmit()}
              disabled={answered}
              placeholder={`${blank.label}에 들어갈 답을 입력하세요`}
              className={`w-full px-4 py-3 rounded-xl border-2 text-gray-800 font-medium text-sm outline-none transition-all disabled:cursor-not-allowed ${borderClass}`}
            />
          </div>
        )
      })}

      {!answered && (
        <button
          onClick={handleSubmit}
          disabled={values.some(value => !value.trim())}
          className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 active:scale-95 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          제출하기
        </button>
      )}

      {answered && (
        <div className="text-sm text-gray-600 bg-gray-50 rounded-xl p-3">
          <span className="font-semibold text-gray-700">정답: </span>
          {q.answers.map(answerSet => answerSet[0]).join(' / ')}
        </div>
      )}
    </div>
  )
}
