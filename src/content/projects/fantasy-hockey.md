---
title: Fantasy Hockey Assistant
summary: One assistant for all my fantasy hockey leagues. It tells me who plays tonight, what to change, and who to pick up, and Claude can reason over the same data.
years: "2025 – present"
stack: [Python, PostgreSQL, Docker, NHL API, Claude MCP]
era: current
featured: true
order: 1
---

I play in several fantasy hockey leagues across two platforms, each with its own scoring and roster rules. Checking lineups every morning was turning into a second job.

So I built one system that sits on top of all of them. It pulls games and box scores from the NHL API into Postgres and puts every league behind the same interface. On top of that:

- **A morning digest.** Who in my lineup plays today, what to swap, and who is worth streaming, for every league in one read.
- **A draft board** that ranks players by value under each league's real scoring, against the replacement level for that league's roster.
- **A Claude MCP server** with the same facts, so I can talk through trades and drafts with real numbers.

My streaming rules are written into it. Never drop someone above roughly 75% rostered, prefer players on the power play, and rank pickups by games played, then by games on light nights.

It did not start out that smart. Early versions suggested dropping star players, and ESPN refusing the move was the only thing that stopped it. Those guardrails are in the code now.
