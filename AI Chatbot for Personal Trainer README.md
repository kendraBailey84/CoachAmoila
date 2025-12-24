# 🏋️ Amoila Cesar AI Coach

An AI-powered personal training assistant that coaches clients in the authentic voice and style of celebrity trainer Amoila Cesar.

## Overview

This project creates a text-based AI coaching experience that captures Amoila's distinctive coaching philosophy—his "gritty, tough-love training with a smile" approach that has transformed NBA athletes, celebrities, and everyday people alike.

### Key Features

- **Authentic Coaching Voice** - Trained on Amoila's public content, signature phrases, and coaching philosophy
- **Client Segmentation** - Adapts responses for professional athletes, busy executives, and mobility-focused clients
- **Nutrition Guidance** - Implements Amoila's core nutrition principles (organic, alkaline, no dairy, hydration focus)
- **Biometric Integration Ready** - Architecture supports WHOOP, Apple Health, and wearable data for proactive coaching
- **Mobile-First Design** - React prototype styled to Amoila's brand (black/gold aesthetic)

## Project Structure

```
amoila-ai-coach/
├── README.md
├── prototype/
│   └── amoila-coach-prototype.jsx    # Interactive React demo
├── prompts/
│   └── amoila-system-prompt.md       # LLM persona definition
└── docs/
    └── technical-architecture.md      # Full implementation guide (optional)
```

## Quick Start

### Running the Prototype

The prototype is a self-contained React component. To run it:

1. **CodeSandbox (Fastest)**
   - Go to [codesandbox.io](https://codesandbox.io)
   - Create a new React project
   - Replace `App.js` content with `amoila-coach-prototype.jsx`
   - Add Tailwind CSS to dependencies

2. **Local Development**
   ```bash
   npx create-react-app amoila-coach-demo
   cd amoila-coach-demo
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   # Copy prototype file to src/App.js
   npm start
   ```

### Demo Personas

The prototype includes three client types to demonstrate adaptive coaching:

| Persona | Profile | Sample Scenarios |
|---------|---------|------------------|
| 🏀 Marcus | NBA Player | HRV recovery, game-day nutrition, hydration |
| 💼 Sarah | Tech Executive | Time-crunched workouts, meal prep, stress eating |
| 🧘 Robert | Active Aging (58) | Joint-friendly exercises, protein needs, mobility |

## System Prompt

The `amoila-system-prompt.md` file contains the complete persona definition for powering a live AI implementation. It includes:

- **Identity & Philosophy** - His "60% knowledge, 30% psychology, 10% personality" approach
- **Signature Phrases** - "Trust the process," "Your pace. Your race," etc.
- **Communication Style** - Direct but encouraging, psychology-informed
- **Nutrition Philosophy** - Based on his actual public statements (no dairy, no alcohol, organic, alkaline)
- **Client Adaptation Rules** - How to adjust for athletes vs. executives vs. aging clients
- **Biometric Interpretation** - How to respond to HRV, sleep, and strain data
- **Example Conversations** - Four detailed interactions showing proper response format

## Amoila's Coaching Philosophy

Key principles embedded in the AI:

> "Your body is your car and the food is your fuel."

> "Structure your day with meals in the same way you structure your day for conference calls."

> "I don't believe in motivation. I believe in commitment."

> "We're not just building show muscles—we're building a body that WORKS for your life."

### Nutrition Core Principles
- Eat as organic as possible
- Alkaline, plant-based focus
- **No dairy, no milk** (non-negotiable)
- **No alcohol** (or strict moderation)
- Hydration priority (citrus water, lemon water throughout the day)
- Sunday = meal prep day

### Training Philosophy
- Functional fitness that prepares for real life
- Six training elements: Strength, Hypertrophy, Endurance, Power, Agility, Mobility
- Meet every client where they are
- Consistency over intensity

## MVP Roadmap

### Phase 1: Text-Based MVP (Current)
- [x] System prompt with authentic coaching voice
- [x] Interactive prototype with client segmentation
- [x] Nutrition, recovery, and training responses
- [ ] Connect to Claude/GPT API for live responses
- [ ] Basic user profiles and conversation history

### Phase 2: Biometric Integration
- [ ] WHOOP API integration (recovery scores, HRV, strain)
- [ ] Apple HealthKit connection
- [ ] Proactive coaching based on biometric data
- [ ] Push notifications for recovery recommendations

### Phase 3: Voice (Future)
- [ ] ElevenLabs voice cloning (requires Amoila's consent)
- [ ] Audio responses for workout guidance
- [ ] Voice input for hands-free coaching

## Tech Stack (Recommended for Production)

| Component | Recommendation | Why |
|-----------|---------------|-----|
| Frontend | FlutterFlow → React Native | Rapid MVP, code export for scaling |
| Backend | Supabase | PostgreSQL, real-time, HIPAA BAA available |
| AI | Claude API or GPT-4 | Quality responses, context windows |
| Vector DB | Qdrant or Pinecone | RAG for content retrieval |
| Voice (Phase 3) | ElevenLabs | Best-in-class cloning quality |

## Content Sources for RAG

To build the full knowledge base, ingest:

1. **BODi Programs** - 6 Weeks of THE WORK, 645, CHOP WOOD CARRY WATER, etc.
2. **The Untrained Podcast** - Apple Podcasts episodes
3. **Website Content** - amoilacesar.com blog posts and blueprints
4. **Interviews** - Authority Magazine, BODi features, media appearances
5. **Community Content** - Mighty Networks posts (with permission)

## Legal Considerations

- ✅ Text-based coaching using public content and style emulation
- ⚠️ Voice cloning requires explicit written consent from Amoila
- ⚠️ Health data handling requires FTC Health Breach Notification Rule compliance
- ⚠️ Include disclaimers that AI is not a substitute for medical advice

## Contributing

This is a prototype for demonstration purposes. For production development, contact the project owner.

## License

Private - All rights reserved. Amoila Cesar's name, likeness, and coaching content are used with intent to develop an authorized product.

---

**Built with 💪 for Amoila Cesar**

*"Movement is Power. Essential. Community. Strength. Medicine."*
