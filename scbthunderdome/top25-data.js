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
const TOP25 = [
  {
    week: 0,
    teams: [
      { rank: 1, team: "SMU", record: "0-0" },
      { rank: 2, team: "UCLA", record: "1-0" },
      { rank: 3, team: "South Carolina", record: "0-0" },
      { rank: 4, team: "Kentucky", record: "1-0" },
      { rank: 5, team: "Ohio State", record: "0-0" },
      { rank: 6, team: "Ole Miss", record: "0-0" },
      { rank: 7, team: "Oklahoma", record: "0-0" },
      { rank: 8, team: "Wisconsin", record: "1-0" },
      { rank: 9, team: "Tennessee", record: "0-0" },
      { rank: 10, team: "Notre Dame", record: "0-0" },
      { rank: 11, team: "Indiana", record: "0-0" },
      { rank: 12, team: "Oklahoma State", record: "1-0" },
      { rank: 13, team: "Louisville", record: "0-0" },
      { rank: 14, team: "Duke", record: "0-0" },
      { rank: 15, team: "Washington", record: "0-0" },
      { rank: 16, team: "Auburn", record: "0-0" },
      { rank: 17, team: "BYU", record: "0-0" },
      { rank: 18, team: "Houston", record: "1-0" },
      { rank: 19, team: "Texas Tech", record: "0-0" },
      { rank: 20, team: "NC State", record: "0-0" },
      { rank: 21, team: "Nebraska", record: "0-0" },
      { rank: 22, team: "Miami", record: "0-0" },
      { rank: 23, team: "Michigan", record: "0-0" },
      { rank: 24, team: "Penn State", record: "0-0" },
      { rank: 25, team: "Kansas State", record: "0-0" },
    ],
  },
  {
    week: 1,
    teams: [
      { rank: 1, team: "SMU", record: "1-0" },
      { rank: 2, team: "UCLA", record: "2-0" },
      { rank: 3, team: "South Carolina", record: "0-0" },
      { rank: 4, team: "Kentucky", record: "2-0" },
      { rank: 5, team: "Ohio State", record: "0-0" },
      { rank: 6, team: "Ole Miss", record: "0-0" },
      { rank: 7, team: "Oklahoma", record: "0-0" },
      { rank: 8, team: "Wisconsin", record: "1-0" },
      { rank: 9, team: "Tennessee", record: "0-1" },
      { rank: 10, team: "Notre Dame", record: "1-0" },
      { rank: 11, team: "Indiana", record: "0-0" },
      { rank: 12, team: "Oklahoma State", record: "1-0" },
      { rank: 13, team: "Louisville", record: "0-0" },
      { rank: 14, team: "Duke", record: "0-0" },
      { rank: 15, team: "Washington", record: "0-0" },
      { rank: 16, team: "Auburn", record: "0-0" },
      { rank: 17, team: "BYU", record: "0-1" },
      { rank: 18, team: "Houston", record: "1-0" },
      { rank: 19, team: "Texas Tech", record: "0-0" },
      { rank: 20, team: "NC State", record: "0-0" },
      { rank: 21, team: "Nebraska", record: "0-0" },
      { rank: 22, team: "Miami", record: "0-0" },
      { rank: 23, team: "Michigan", record: "1-0" },
      { rank: 24, team: "Penn State", record: "0-0" },
      { rank: 25, team: "Kansas State", record: "0-0" },
    ],
  },
  {
    week: 2,
    teams: [
      { rank: 1, team: "SMU", record: "2-0" },
      { rank: 2, team: "South Carolina", record: "1-0" },
      { rank: 3, team: "UCLA", record: "2-0" },
      { rank: 4, team: "Kentucky", record: "2-0" },
      { rank: 5, team: "Ohio State", record: "1-0" },
      { rank: 6, team: "Ole Miss", record: "1-0" },
      { rank: 7, team: "Oklahoma", record: "1-1" },
      { rank: 8, team: "Notre Dame", record: "2-0" },
      { rank: 9, team: "Oklahoma State", record: "2-0" },
      { rank: 10, team: "Louisville", record: "1-0" },
      { rank: 11, team: "Duke", record: "1-0" },
      { rank: 12, team: "Auburn", record: "1-0" },
      { rank: 13, team: "Wisconsin", record: "1-1" },
      { rank: 14, team: "Houston", record: "2-0" },
      { rank: 15, team: "NC State", record: "1-0" },
      { rank: 16, team: "Tennessee", record: "0-1" },
      { rank: 17, team: "Nebraska", record: "1-0" },
      { rank: 18, team: "Miami", record: "1-0" },
      { rank: 19, team: "Michigan", record: "2-0" },
      { rank: 20, team: "Kansas State", record: "1-0" },
      { rank: 21, team: "Washington", record: "0-1" },
      { rank: 22, team: "Boise State", record: "1-0" },
      { rank: 23, team: "Alabama", record: "1-0" },
      { rank: 24, team: "Texas Tech", record: "0-1" },
      { rank: 25, team: "BYU", record: "0-1" },
    ],
  },
];
