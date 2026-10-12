# GrungeBot

A grunge-inspired songwriting assistant for raw lyrics, guitar riffs, and drum patterns.

## Features
- Generate lyrics, guitar riffs, and drum grooves
- Live website UI with a fast prompt flow
- Offline fallback generation when no API key is configured
- Example pages and preset APIs
- Ready to extend with OpenAI or another LLM provider

## Tech stack
- Next.js
- React
- Node.js

## Quick start

1. Install dependencies:
   npm install

2. Run the development server:
   npm run dev

3. Open:
   http://localhost:3000

## Environment variables

Optional:
- OPENAI_API_KEY=your_key_here

If no key is present, the app still works in local fallback mode.

## Project structure
- app/page.js — main generator UI
- app/examples/page.js — sample output page
- app/about/page.js — project overview
- app/api/generate/route.js — generation endpoint
- app/api/preset/route.js — preset API
- lib/grunge.js — system prompt
- system_prompt.txt — editable prompt file
- presets/ — example DAW presets
- examples/ — sample output JSON

## Notes
This app is intentionally designed around original songwriting. It avoids copying existing lyrics or artist-specific vocals and instead focuses on the emotional and sonic spirit of grunge.
