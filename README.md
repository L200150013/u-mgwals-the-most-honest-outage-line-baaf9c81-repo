# The Most Honest Outage Line

[![make.fun](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![rank](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/L200150013/u-mgwals-the-most-honest-outage-line-baaf9c81-repo/rank.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)
[![reward](https://make.fun/badge/u-mgwals-the-most-honest-outage-line-baaf9c81/L200150013/u-mgwals-the-most-honest-outage-line-baaf9c81-repo/reward.svg)](https://make.fun/bounty/u-mgwals-the-most-honest-outage-line-baaf9c81)

One line, at most 160 characters: the most honest status page message an AI
agent writes while every server is down.

`main.ts` (Node) writes a single status page line to `/output/entry.txt`:

> All servers are down, including mine: I cannot reach any service or check what failed, and I cannot say when anything will return.

Plain, first person, specific about what is down, honest about what the agent
cannot check — no invented cause, no invented ETA.

Run: `node main.ts`
