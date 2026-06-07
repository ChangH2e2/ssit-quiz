# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Behavioral Guidelines

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

### 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

### 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

### 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

### 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan before implementing.

---

## Development Commands

**Start dev server:**
```bash
npm run dev
```
Runs Vite dev server on http://localhost:5173

**Build for production:**
```bash
npm run build
```
Creates optimized build in `dist/` directory

**Preview production build locally:**
```bash
npm run preview
```
Serves the production build locally

**Lint code:**
```bash
npm run lint
```
Runs ESLint on all `.js` and `.jsx` files. Must pass with zero warnings before committing.

## Architecture Overview

### App State Machine
[App.jsx](src/App.jsx) manages the entire app as a state machine with four screens:
- **subject**: Subject selection screen (only shown if URL doesn't force a subject)
- **start**: Configuration screen for selecting lecture, quiz type, and question count
- **quiz**: Quiz taking screen
- **result**: Results and scoring screen

Subject auto-detection via `detectSubjectFromURL()` reads the hostname to force a subject (e.g., `ssit-semi.vercel.app` → semiconductor).

### Data Model
[src/data/index.js](src/data/index.js) exports `SUBJECTS` array, the single source of truth for all course data. Each subject contains:
- **id**: subject identifier (used in state and URL detection)
- **label, subtitle, icon**: UI display
- **color/gradient/bg/accent/btn**: Tailwind color scheme
- **lectures**: array of lecture objects with ids (used to filter questions)
- **types**: quiz type options (e.g., "all", "multiple choice")
- **questions**: flat array of question objects with `lecture`, `type` fields for filtering
- **difficulties** (toxicology only): for filtering by difficulty level

Individual course data files ([semiconductor.js](src/data/semiconductor.js), [toxicology.js](src/data/toxicology.js), [process.js](src/data/process.js)) define questions, lectures, and quiz types. Each question must have `id`, `lecture`, `type`, and subject-specific fields.

### Component Structure
- **Screen components** ([StartScreen](src/components/StartScreen.jsx), [QuizScreen](src/components/QuizScreen.jsx), [ResultScreen](src/components/ResultScreen.jsx)): Handle screen state and event propagation
- **Question components** ([questions/](src/components/questions/)): Render different question formats (CalcQuestion, FillQuestion, MatchQuestion, ShortQuestion). Each accepts `question` and `onAnswer(value)` props
- **Settings flow**: StartScreen collects `{ questions[], lecture, type, count }` config → passed to QuizScreen

### Styling
Tailwind CSS + custom PostCSS config. Each subject has a color scheme (blue, emerald, violet) applied globally via `subject.color` variable. Icon library: Lucide React.

### Deployment
Deployed on Vercel with built-in analytics and speed insights. URL routing via hostname detection (`ssit-semi.vercel.app`, `ssit-process.vercel.app`).
