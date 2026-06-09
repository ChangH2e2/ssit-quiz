import { useState, useEffect } from 'react'
import { SUBJECTS, detectSubjectFromURL } from './data/index.js'
import SubjectScreen from './components/SubjectScreen.jsx'
import StartScreen from './components/StartScreen.jsx'
import QuizScreen from './components/QuizScreen.jsx'
import ResultScreen from './components/ResultScreen.jsx'
import KeywordStudyScreen from './components/KeywordStudyScreen.jsx'
import PastExamScreen from './components/PastExamScreen.jsx'

const PAST_EXAM_SUBJECT = {
  id: 'past-exam',
  label: '기출문제',
  subtitle: '연도별 기출 모음',
  icon: '📋',
  color: 'amber',
  gradient: 'from-amber-500 to-orange-500',
  ring: 'ring-amber-400',
  bg: 'bg-amber-50',
  accent: 'text-amber-600',
  btn: 'bg-amber-600 hover:bg-amber-700',
}

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

export default function App() {
  const [screen, setScreen] = useState('subject') // subject | start | quiz | result | keyword-study | past-exam
  const [subjectId, setSubjectId] = useState(null)
  const [settings, setSettings] = useState(null)  // { questions[], lecture, type, count }
  const [results, setResults] = useState(null)     // { total, log[] }

  // Auto-detect from hostname on first render
  useEffect(() => {
    const detected = detectSubjectFromURL()
    if (detected) {
      setSubjectId(detected)
      setScreen('start')
    }
  }, [])

  const subject = subjectId === 'past-exam'
    ? PAST_EXAM_SUBJECT
    : subjectId ? SUBJECTS.find(s => s.id === subjectId) : null

  const handleSelectSubject = (id) => {
    setSubjectId(id)
    setScreen('start')
  }

  const handleStart = (cfg) => {
    setSettings(cfg)
    setResults(null)
    setScreen('quiz')
  }

  const handleFinish = (res) => {
    setResults(res)
    setScreen('result')
  }

  const handleRestart = () => {
    setSettings(null)
    setResults(null)
    setScreen('start')
  }

  const handleRestartSame = () => {
    if (subject && settings) {
      if (subject.id === 'past-exam') {
        setSettings({
          ...settings,
          questions: shuffle(settings.questions).map(shuffleMultipleOptions),
        })
      } else {
        let pool = subject.questions
        if (settings.lecture !== 'all') pool = pool.filter(q => q.lecture === settings.lecture)
        if (settings.type !== 'all') pool = pool.filter(q => q.type === settings.type)
        const effectiveCount = Math.min(settings.count ?? pool.length, pool.length)
        setSettings({
          ...settings,
          questions: shuffle(pool).slice(0, effectiveCount).map(shuffleMultipleOptions),
          count: effectiveCount,
        })
      }
    }
    setResults(null)
    setScreen('quiz')
  }

  const handleHome = () => {
    // If URL forced a subject, stay on start; otherwise go to subject selection
    const forced = detectSubjectFromURL()
    if (forced) {
      setSettings(null)
      setResults(null)
      setScreen('start')
    } else {
      setSubjectId(null)
      setSettings(null)
      setResults(null)
      setScreen('subject')
    }
  }

  if (screen === 'keyword-study') {
    return (
      <KeywordStudyScreen
        subject={subject}
        onHome={handleHome}
      />
    )
  }
  if (screen === 'past-exam') {
    return (
      <PastExamScreen
        onStart={(cfg) => {
          setSubjectId('past-exam')
          setSettings(cfg)
          setResults(null)
          setScreen('quiz')
        }}
        onHome={() => {
          setSubjectId(null)
          setScreen('subject')
        }}
      />
    )
  }
  if (screen === 'subject') {
    return (
      <SubjectScreen
        subjects={SUBJECTS}
        onSelect={handleSelectSubject}
        onPastExam={() => setScreen('past-exam')}
      />
    )
  }
  if (screen === 'start') {
    return (
      <StartScreen
        subject={subject}
        onStart={handleStart}
        onKeywordStudy={subject?.id === 'toxicology' ? () => setScreen('keyword-study') : null}
        onBack={detectSubjectFromURL() ? null : () => setScreen('subject')}
      />
    )
  }
  if (screen === 'quiz') {
    return (
      <QuizScreen
        subject={subject}
        settings={settings}
        onFinish={handleFinish}
        onHome={handleHome}
      />
    )
  }
  if (screen === 'result') {
    return (
      <ResultScreen
        subject={subject}
        results={results}
        settings={settings}
        onRestart={handleRestart}
        onRestartSame={handleRestartSame}
        onHome={handleHome}
      />
    )
  }
  return null
}
