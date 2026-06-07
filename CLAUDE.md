# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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
