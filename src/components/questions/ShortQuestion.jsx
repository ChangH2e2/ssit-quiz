import { useState } from 'react'

export default function ShortQuestion({ q, answered, onAnswer }) {
  const [text, setText] = useState('')
  const [revealed, setRevealed] = useState(false)

  const handleReveal = () => {
    setRevealed(true)
  }

  const handleSelfMark = (correct) => {
    onAnswer(correct, text)
  }

  return (
    <div className="space-y-4">
      <textarea
        value={text}
        onChange={event => setText(event.target.value)}
        disabled={revealed}
        placeholder="여기에 답을 작성하세요..."
        rows={4}
        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 text-gray-800 text-sm font-medium outline-none transition-all resize-none disabled:bg-gray-50 disabled:cursor-not-allowed"
      />

      {!revealed && (
        <button
          onClick={handleReveal}
          className="w-full py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 active:scale-95 transition-all"
        >
          모범 답안 확인하기
        </button>
      )}

      {revealed && !answered && (
        <div className="space-y-3">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-xs font-bold text-amber-700 mb-1">모범 답안</p>
            <p className="text-sm text-gray-800 whitespace-pre-line leading-relaxed">{q.modelAnswer}</p>
          </div>
          <p className="text-sm text-center text-gray-500 font-medium">내 답과 비교해서 직접 채점하세요</p>
          <div className="flex gap-3">
            <button
              onClick={() => handleSelfMark(false)}
              className="flex-1 py-3 bg-rose-100 text-rose-700 border-2 border-rose-300 rounded-xl font-bold hover:bg-rose-200 active:scale-95 transition-all"
            >
              틀림
            </button>
            <button
              onClick={() => handleSelfMark(true)}
              className="flex-1 py-3 bg-emerald-100 text-emerald-700 border-2 border-emerald-300 rounded-xl font-bold hover:bg-emerald-200 active:scale-95 transition-all"
            >
              맞음
            </button>
          </div>
        </div>
      )}

      {answered && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-xs font-bold text-amber-700 mb-1">모범 답안</p>
          <p className="text-sm text-gray-800 whitespace-pre-line leading-relaxed">{q.modelAnswer}</p>
        </div>
      )}
    </div>
  )
}
