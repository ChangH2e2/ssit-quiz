#!/usr/bin/env node
// Inserts all local practice questions into Supabase
import { questions as semiQuestions } from '../src/data/semiconductor.js'
import { questions as toxQuestions } from '../src/data/toxicology.js'
import { questions as processQuestions } from '../src/data/process.js'

const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhdnpmYW51c3BvenN2eGp5aGdiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3OTY0ODM2MCwiZXhwIjoyMDk1MjI0MzYwfQ.bwNU-A9UodUBnv4BNw-kYTIgXiFSo7GupoZqqXi-eG8'
const SUPABASE_URL = 'https://ravzfanuspozsvxjyhgb.supabase.co'

const BLOCKED_TYPES = new Set(['calc', 'short'])

function toRow(q, subject) {
  // All rows must have the same keys for Supabase batch insert
  return {
    subject,
    year: 0,        // 0 = practice question (not an exam)
    semester: 'midterm',
    lecture: q.lecture ?? null,
    category: q.category ?? null,
    type: q.type,
    question: q.question,
    options: q.options ?? null,
    answer: typeof q.answer === 'number' ? q.answer : null,
    blanks: q.blanks ?? null,
    answers: q.answers ?? null,
    accepts: q.accepts ?? (typeof q.answer === 'string' ? [q.answer] : null),
    explanation: buildExplanation(q),
  }
}

function buildExplanation(q) {
  const parts = []
  if (q.explanation) parts.push(q.explanation)
  if (q.formula) parts.push(`[공식] ${q.formula}`)
  if (Array.isArray(q.solution)) parts.push(q.solution.join('\n'))
  return parts.join('\n\n') || null
}

async function insert(rows) {
  const resp = await fetch(`${SUPABASE_URL}/rest/v1/exam_questions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${SERVICE_KEY}`,
      apikey: SERVICE_KEY,
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(rows),
  })
  if (!resp.ok) {
    const body = await resp.text()
    throw new Error(`HTTP ${resp.status}: ${body}`)
  }
  return resp.status
}

const BATCH = 50
async function insertAll(qs, subject) {
  const allowed = qs.filter(q => !BLOCKED_TYPES.has(q.type))
  const skipped = qs.length - allowed.length
  if (skipped > 0) console.log(`  [${subject}] skipping ${skipped} calc/short questions`)

  const rows = allowed.map(q => toRow(q, subject))
  for (let i = 0; i < rows.length; i += BATCH) {
    const batch = rows.slice(i, i + BATCH)
    const status = await insert(batch)
    console.log(`  [${subject}] batch ${i}–${i + batch.length - 1}: ${status}`)
  }
  return allowed.length
}

const datasets = [
  { qs: processQuestions, subject: 'process' },
  { qs: semiQuestions, subject: 'semiconductor' },
  { qs: toxQuestions, subject: 'toxicology' },
]

let total = 0, skippedTotal = 0
for (const { qs, subject } of datasets) {
  console.log(`\nInserting ${subject} questions (${qs.length} total)...`)
  total += await insertAll(qs, subject)
}
console.log(`\nDone! Inserted: ${total} | Skipped (calc/short): ${402 - total}`)
