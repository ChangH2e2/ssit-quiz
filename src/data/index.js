import { questions as semiQuestions, LECTURES as SEMI_LECTURES } from './semiconductor.js'
import { questions as toxQuestions, LECTURES as TOX_LECTURES, QUIZ_TYPES as TOX_TYPES } from './toxicology.js'

const SEMI_TYPES = [
  { id: 'all', label: '전체 유형', icon: '🎯', color: 'blue' },
  { id: 'multiple', label: '4지선다', icon: '📝', color: 'blue' },
]

export const SUBJECTS = [
  {
    id: 'semiconductor',
    label: '반도체 구조 기술',
    subtitle: '8~13강 기말고사 대비',
    icon: '💎',
    color: 'blue',
    gradient: 'from-blue-500 to-cyan-500',
    ring: 'ring-blue-400',
    bg: 'bg-blue-50',
    accent: 'text-blue-600',
    btn: 'bg-blue-600 hover:bg-blue-700',
    lectures: SEMI_LECTURES,
    types: SEMI_TYPES,
    questions: semiQuestions.map(q => ({ ...q, subject: 'semiconductor' })),
  },
  {
    id: 'toxicology',
    label: '산업독성학',
    subtitle: '9~14강 기말고사 대비',
    icon: '🧪',
    color: 'violet',
    gradient: 'from-violet-500 to-purple-600',
    ring: 'ring-violet-400',
    bg: 'bg-violet-50',
    accent: 'text-violet-600',
    btn: 'bg-violet-600 hover:bg-violet-700',
    lectures: TOX_LECTURES,
    types: TOX_TYPES,
    questions: toxQuestions.map(q => ({ ...q, subject: 'toxicology' })),
  },
]

export function getSubject(id) {
  return SUBJECTS.find(subject => subject.id === id)
}

export function detectSubjectFromURL() {
  const host = window.location.hostname
  if (host.includes('ssit-semi')) return 'semiconductor'
  return null
}
