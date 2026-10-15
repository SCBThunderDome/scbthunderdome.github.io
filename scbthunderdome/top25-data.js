/* ============================================================
   TOP 25 — the in-game AP poll, transcribed from screenshots
   ------------------------------------------------------------
   SCB Thunderdome's copy of the EA College Football 27 Top 25,
   one entry per week. It is NOT the site's own computed Power
   Rankings (that's the Rankings tab, built from head-to-head
   results). This poll is mostly CPU teams with a handful of
   coaches mixed in, and it drives two things on the site:

     1. The Top 25 tab.
     2. The "#N" rank badges on schedules. A game played in week N
        shows each team's rank from THAT week's poll, so a schedule
        always shows what a team was ranked WHEN the game was
        played, even after they rise or fall later.

   Because of (2), each week's poll is frozen history: once a week
   is entered, never edit it to reflect a later poll — add a new
   week instead.

   WHAT THE SITE SHOWS, AND WHEN (the reveal rule)
   The site shows the poll for SEASON.currentWeek — the week the
   season has actually advanced to — NOT simply the newest block in
   this file. So a poll added here for a week the site hasn't
   advanced to yet sits in the repo INVISIBLE, and reveals the
   moment someone advances to that week.

   Week 1 was transcribed 2026-07-31 with `node tools/top25.js`.
   Three league teams are ranked in it — Houston 21, SMU 22 and
   Louisville 24 — and those ranks match the badges already visible
   on the schedule screenshots, which is a useful independent check
   that the transcription is right.

   Add later weeks the same way. Never hand-edit an existing block:
   see the frozen-history rule above and in tools/top25.js.

   Shape:
     { week: 0, teams: [{ rank: 1, team: "Georgia", record: "0-0" }, ...] }
   ------------------------------------------------------------ */
const TOP25 = [];
