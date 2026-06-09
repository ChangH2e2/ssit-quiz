import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase.js'

const SUBJECT_OPTIONS = [
  { id: 'all', label: '전체 과목' },
  { id: 'toxicology', label: '산업독성학' },
  { id: 'semiconductor', label: '반도체 구조 기술' },
  { id: 'process', label: '반도체 공정' },
]

const SEMESTER_OPTIONS = [
  { id: 'all', label: '전체' },
  { id: 'midterm', label: '중간고사' },
  { id: 'final', label: '기말고사' },
]

export default function PastExamScreen({ onStart, onHome }) {
  const [years, setYears] = useState([])
  const [selectedYear, setSelectedYear] = useState('all')
  const [selectedSemester, setSelectedSemester] = useState('all')
  const [selectedSubject, setSelectedSubject] = useState('all')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    supabase
      .from('exam_questions')
      .select('year')
      .order('year', { ascending: false })
      .then(({ data }) => {
        if (data) setYears([...new Set(data.map(r => r.year))])
      })
  }, [])

  const handleStart = async () => {
    setLoading(true)
    setError(null)

    let query = supabase.from('exam_questions').select('*')
    if (selectedYear !== 'all') query = query.eq('year', Number(selectedYear))
    if (selectedSemester !== 'all') query = query.eq('semester', selectedSemester)
    if (selectedSubject !== 'all') query = query.eq('subject', selectedSubject)

    const { data, error: fetchError } = await query
    setLoading(false)

    if (fetchError) { setError('문제를 불러오는 데 실패했습니다.'); return }
    if (!data || data.length === 0) { setError('해당 조건의 기출문제가 없습니다.'); return }

    onStart({ questions: data, lecture: 'all', type: 'all', count: data.length })
  }

  const yearOptions = [
    { id: 'all', label: '전체 연도' },
    ...years.map(y => ({ id: String(y), label: `${y}년` })),
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-lg animate-fadeInUp">
        <button
          onClick={onHome}
          className="text-sm text-gray-400 hover:text-gray-600 flex items-center gap-1 mb-6 transition-colors"
        >
          ← 홈으로
        </button>

        <div className="text-center mb-8">
          <div className="text-5xl mb-3">📋</div>
          <h1 className="text-2xl font-black text-gray-900">기출문제</h1>
          <p className="text-gray-500 mt-1 text-sm">연도 · 학기 · 과목별로 필터해서 풀어보세요</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-6">
          <FilterSelect
            label="연도"
            options={yearOptions}
            value={selectedYear}
            onChange={setSelectedYear}
          />
          <FilterSelect
            label="학기"
            options={SEMESTER_OPTIONS}
            value={selectedSemester}
            onChange={setSelectedSemester}
          />
          <FilterSelect
            label="과목"
            options={SUBJECT_OPTIONS}
            value={selectedSubject}
            onChange={setSelectedSubject}
          />

          {error && (
            <p className="text-sm text-red-500 text-center bg-red-50 rounded-lg py-2 px-4">{error}</p>
          )}

          <button
            onClick={handleStart}
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-lg shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? '불러오는 중...' : '시험 시작'}
          </button>
        </div>
      </div>
    </div>
  )
}

function FilterSelect({ label, options, value, onChange }) {
  return (
    <div>
      <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">{label}</div>
      <div className="flex flex-wrap gap-2">
        {options.map(opt => (
          <button
            key={opt.id}
            onClick={() => onChange(opt.id)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              value === opt.id
                ? 'bg-amber-500 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}
