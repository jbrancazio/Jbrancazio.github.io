---
title: World Cup 2026 Predictor
summary: A Tippspiel, the German World Cup prediction game, for friends and family. VERY vibe coded, with a score engine that picks the score worth the most points.
years: "2026"
stack: [Python, Monte Carlo simulation, Poisson models, Claude API, Google Sheets, Docker]
era: current
featured: true
order: 2
---

I grew up playing Tippspiel, the German World Cup prediction game. This year I ran one myself for the first time, with about a dozen friends and family.

I borrowed the scoring tiers from German prediction sites: points for the right result, more for the right goal difference, and the most for the exact score. I simulated 100 scenarios to settle the champion bonus, which ended up at 12 points. That scoring means the most likely score is not always the best pick.

The engine:

- **Rates every team** on Elo, then adjusts for recent form, injuries, World Cup history, squad experience, home field, and traveling fans.
- **Simulates each match** 50,000 times and picks the score with the most expected points under the pool's rules.
- **Simulates the whole tournament** to help with my own champion pick.
- **Reads paper ballots.** Take a photo and Claude reads the picks into the shared sheet.

The site itself is VERY vibe coded and locally hosted, but it held up. It was also a good excuse to talk about countries with my kid.
