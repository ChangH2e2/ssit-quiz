export default function SubjectScreen({ subjects, onSelect, onPastExam }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg animate-fadeInUp">
        <div className="text-center mb-10">
          <div className="text-5xl mb-3">📚</div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">SSIT 기말고사 퀴즈</h1>
          <p className="text-gray-500 mt-2 text-sm font-medium">과목을 선택해서 바로 풀어보세요</p>
        </div>

        <div className="flex flex-col gap-4">
          {subjects.map(subject => (
            <button
              key={subject.id}
              onClick={() => onSelect(subject.id)}
              className="group w-full text-left"
            >
              <div className={`rounded-2xl bg-gradient-to-r ${subject.gradient} p-px shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0`}>
                <div className="rounded-2xl bg-white px-6 py-5 flex items-center gap-5">
                  <div className={`w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br ${subject.gradient} shadow-md flex-shrink-0`}>
                    <span className="text-white text-2xl">{subject.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-xs font-bold uppercase tracking-widest mb-1 ${subject.accent}`}>
                      {subject.subtitle}
                    </div>
                    <div className="text-xl font-black text-gray-900">{subject.label}</div>
                    <div className="text-xs text-gray-400 mt-1">
                      {subject.questions.length}문제 · {subject.lectures.filter(l => l.id !== 'all').length}개 강의
                    </div>
                  </div>
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${subject.gradient} flex items-center justify-center flex-shrink-0 shadow group-hover:scale-110 transition-transform`}>
                    <span className="text-white text-sm font-bold">→</span>
                  </div>
                </div>
              </div>
            </button>
          ))}

          {onPastExam && (
            <>
              <div className="flex items-center gap-3 my-1">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">기출문제</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>
              <button onClick={onPastExam} className="group w-full text-left">
                <div className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 p-px shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0">
                  <div className="rounded-2xl bg-white px-6 py-5 flex items-center gap-5">
                    <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-md flex-shrink-0">
                      <span className="text-white text-2xl">📋</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold uppercase tracking-widest mb-1 text-amber-600">
                        연도별 기출 모음
                      </div>
                      <div className="text-xl font-black text-gray-900">기출문제</div>
                      <div className="text-xs text-gray-400 mt-1">연도 · 학기 · 과목별 필터</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0 shadow group-hover:scale-110 transition-transform">
                      <span className="text-white text-sm font-bold">→</span>
                    </div>
                  </div>
                </div>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
