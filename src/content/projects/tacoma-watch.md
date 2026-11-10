---
title: Tacoma Watch
summary: A daily job that watches dealer sites and listings for one specific truck and tells me when a price is actually good.
years: "2026"
stack: [Python (standard library only), SQLite, NHTSA VIN API, launchd]
era: current
featured: true
order: 3
---

I am shopping for a specific hybrid truck trim. That meant checking a dozen dealer sites and listings, with no real sense of whether a price was good.

Now a job runs every morning and does it for me:

1. **Collects** listings from dealer sites and classifieds. If one source breaks, the rest still run.
2. **Confirms** each truck is the right year, trim, and drivetrain, using the free NHTSA VIN decoder.
3. **Logs** price, mileage, and seller history to a small database.
4. **Alerts me** when a new truck shows up, or when one is at least 7% under the regional median. It only trusts the median once there are enough comparable listings.

It has no accounts, no API keys, and no cost. All the thresholds live in one config file.

A lot of dealer sites block automated visits, so coverage is partial. I would rather know that than pretend it sees everything.
