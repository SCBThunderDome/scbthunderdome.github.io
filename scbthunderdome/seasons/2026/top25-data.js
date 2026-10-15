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
    week: 1,
    teams: [
      { rank: 1, team: "Ohio State", record: "0-0" },
      { rank: 2, team: "Oregon", record: "0-0" },
      { rank: 3, team: "Notre Dame", record: "0-0" },
      { rank: 4, team: "Georgia", record: "0-0" },
      { rank: 5, team: "Indiana", record: "0-0" },
      { rank: 6, team: "Miami", record: "0-0" },
      { rank: 7, team: "Texas", record: "0-0" },
      { rank: 8, team: "Texas A&M", record: "0-0" },
      { rank: 9, team: "Ole Miss", record: "0-0" },
      { rank: 10, team: "Oklahoma", record: "0-0" },
      { rank: 11, team: "LSU", record: "0-0" },
      { rank: 12, team: "BYU", record: "0-0" },
      { rank: 13, team: "Alabama", record: "0-0" },
      { rank: 14, team: "Michigan", record: "0-0" },
      { rank: 15, team: "USC", record: "1-0" },
      { rank: 16, team: "Texas Tech", record: "0-0" },
      { rank: 17, team: "Penn State", record: "0-0" },
      { rank: 18, team: "Iowa", record: "0-0" },
      { rank: 19, team: "Utah", record: "0-0" },
      { rank: 20, team: "Tennessee", record: "0-0" },
      { rank: 21, team: "Houston", record: "0-0" },
      { rank: 22, team: "SMU", record: "0-0" },
      { rank: 23, team: "Washington", record: "0-0" },
      { rank: 24, team: "Louisville", record: "0-0" },
      { rank: 25, team: "Florida", record: "0-0" },
    ],
  },
  {
    week: 2,
    teams: [
      { rank: 1, team: "Ohio State", record: "1-0" },
      { rank: 2, team: "Oregon", record: "1-0" },
      { rank: 3, team: "Notre Dame", record: "1-0" },
      { rank: 4, team: "Georgia", record: "1-0" },
      { rank: 5, team: "Indiana", record: "1-0" },
      { rank: 6, team: "Miami", record: "1-0" },
      { rank: 7, team: "Texas", record: "1-0" },
      { rank: 8, team: "Texas A&M", record: "1-0" },
      { rank: 9, team: "Ole Miss", record: "1-0" },
      { rank: 10, team: "Oklahoma", record: "1-0" },
      { rank: 11, team: "LSU", record: "1-0" },
      { rank: 12, team: "BYU", record: "1-0" },
      { rank: 13, team: "Alabama", record: "1-0" },
      { rank: 14, team: "Michigan", record: "1-0" },
      { rank: 15, team: "USC", record: "2-0" },
      { rank: 16, team: "Texas Tech", record: "1-0" },
      { rank: 17, team: "Iowa", record: "1-0" },
      { rank: 18, team: "Utah", record: "1-0" },
      { rank: 19, team: "Tennessee", record: "1-0" },
      { rank: 20, team: "Houston", record: "1-0" },
      { rank: 21, team: "SMU", record: "1-0" },
      { rank: 22, team: "Washington", record: "1-0" },
      { rank: 23, team: "Florida", record: "1-0" },
      { rank: 24, team: "Missouri", record: "1-0" },
      { rank: 25, team: "South Carolina", record: "1-0" },
    ],
  },
  {
    week: 3,
    teams: [
      { rank: 1, team: "Ohio State", record: "2-0" },
      { rank: 2, team: "Notre Dame", record: "2-0" },
      { rank: 3, team: "Georgia", record: "2-0" },
      { rank: 4, team: "Indiana", record: "2-0" },
      { rank: 5, team: "Miami", record: "2-0" },
      { rank: 6, team: "Texas A&M", record: "2-1" },
      { rank: 7, team: "Ole Miss", record: "2-0" },
      { rank: 8, team: "Oklahoma", record: "2-0" },
      { rank: 9, team: "LSU", record: "2-0" },
      { rank: 10, team: "BYU", record: "2-0" },
      { rank: 11, team: "Oregon", record: "1-1" },
      { rank: 12, team: "USC", record: "3-0" },
      { rank: 13, team: "Texas Tech", record: "2-1" },
      { rank: 14, team: "Texas", record: "1-1" },
      { rank: 15, team: "Utah", record: "2-0" },
      { rank: 16, team: "Tennessee", record: "2-0" },
      { rank: 17, team: "Houston", record: "3-0" },
      { rank: 18, team: "SMU", record: "3-0" },
      { rank: 19, team: "Michigan", record: "1-1" },
      { rank: 20, team: "Washington", record: "2-0" },
      { rank: 21, team: "Florida", record: "2-0" },
      { rank: 22, team: "Missouri", record: "2-0" },
      { rank: 23, team: "South Carolina", record: "2-0" },
      { rank: 24, team: "Virginia", record: "3-0" },
      { rank: 25, team: "Alabama", record: "1-1" },
    ],
  },
  {
    week: 5,
    teams: [
      { rank: 1, team: "Ohio State", record: "4-0" },
      { rank: 2, team: "Notre Dame", record: "4-0" },
      { rank: 3, team: "Ole Miss", record: "4-0" },
      { rank: 4, team: "USC", record: "5-0" },
      { rank: 5, team: "Oklahoma", record: "4-0" },
      { rank: 6, team: "BYU", record: "3-0" },
      { rank: 7, team: "Tennessee", record: "4-0" },
      { rank: 8, team: "Utah", record: "4-0" },
      { rank: 9, team: "Houston", record: "4-0" },
      { rank: 10, team: "SMU", record: "5-0" },
      { rank: 11, team: "Miami", record: "3-1" },
      { rank: 12, team: "Indiana", record: "3-1" },
      { rank: 13, team: "Texas A&M", record: "3-1" },
      { rank: 14, team: "Texas", record: "2-2" },
      { rank: 15, team: "Michigan", record: "3-1" },
      { rank: 16, team: "Washington", record: "4-0" },
      { rank: 17, team: "Missouri", record: "5-0" },
      { rank: 18, team: "Texas Tech", record: "4-1" },
      { rank: 19, team: "Oregon", record: "2-2" },
      { rank: 20, team: "Auburn", record: "4-0" },
      { rank: 21, team: "Alabama", record: "3-1" },
      { rank: 22, team: "Oklahoma State", record: "4-0" },
      { rank: 23, team: "Georgia", record: "2-2" },
      { rank: 24, team: "Duke", record: "4-0" },
      { rank: 25, team: "LSU", record: "2-2" },
    ],
  },
  {
    week: 7,
    teams: [
      { rank: 1, team: "Ohio State", record: "6-0" },
      { rank: 2, team: "Notre Dame", record: "6-0" },
      { rank: 3, team: "Ole Miss", record: "5-0" },
      { rank: 4, team: "Oklahoma", record: "5-0" },
      { rank: 5, team: "BYU", record: "5-0" },
      { rank: 6, team: "Tennessee", record: "6-0" },
      { rank: 7, team: "Houston", record: "6-0" },
      { rank: 8, team: "SMU", record: "5-0" },
      { rank: 9, team: "Miami", record: "4-1" },
      { rank: 10, team: "Indiana", record: "5-1" },
      { rank: 11, team: "Texas A&M", record: "5-1" },
      { rank: 12, team: "Michigan", record: "4-1" },
      { rank: 13, team: "Texas Tech", record: "4-1" },
      { rank: 14, team: "Utah", record: "4-1" },
      { rank: 15, team: "Oklahoma State", record: "5-0" },
      { rank: 16, team: "Duke", record: "5-0" },
      { rank: 17, team: "Penn State", record: "5-1" },
      { rank: 18, team: "Texas", record: "2-3" },
      { rank: 19, team: "South Carolina", record: "5-1" },
      { rank: 20, team: "UCLA", record: "5-0" },
      { rank: 21, team: "Missouri", record: "5-1" },
      { rank: 22, team: "Auburn", record: "4-1" },
      { rank: 23, team: "Washington", record: "5-1" },
      { rank: 24, team: "Kentucky", record: "5-1" },
      { rank: 25, team: "USC", record: "5-2" },
    ],
  },
  {
    week: 8,
    teams: [
      { rank: 1, team: "Notre Dame", record: "7-0" },
      { rank: 2, team: "Ole Miss", record: "6-0" },
      { rank: 3, team: "Tennessee", record: "7-0" },
      { rank: 4, team: "SMU", record: "6-0" },
      { rank: 5, team: "Indiana", record: "6-1" },
      { rank: 6, team: "Ohio State", record: "6-1" },
      { rank: 7, team: "Texas A&M", record: "6-1" },
      { rank: 8, team: "Oklahoma State", record: "6-0" },
      { rank: 9, team: "Oklahoma", record: "5-1" },
      { rank: 10, team: "Texas Tech", record: "5-1" },
      { rank: 11, team: "Penn State", record: "6-1" },
      { rank: 12, team: "BYU", record: "5-1" },
      { rank: 13, team: "Duke", record: "6-0" },
      { rank: 14, team: "Houston", record: "6-1" },
      { rank: 15, team: "Kentucky", record: "6-1" },
      { rank: 16, team: "South Carolina", record: "5-1" },
      { rank: 17, team: "Michigan", record: "4-2" },
      { rank: 18, team: "USC", record: "5-2" },
      { rank: 19, team: "Miami", record: "4-2" },
      { rank: 20, team: "Northwestern", record: "5-1" },
      { rank: 21, team: "Oregon", record: "3-3" },
      { rank: 22, team: "Louisville", record: "5-2" },
      { rank: 23, team: "Pittsburgh", record: "6-1" },
      { rank: 24, team: "UCLA", record: "5-1" },
      { rank: 25, team: "Georgia", record: "4-3" },
    ],
  },
  {
    week: 9,
    teams: [
      { rank: 1, team: "Notre Dame", record: "7-0" },
      { rank: 2, team: "SMU", record: "8-0" },
      { rank: 3, team: "Indiana", record: "7-1" },
      { rank: 4, team: "Ohio State", record: "6-1" },
      { rank: 5, team: "Oklahoma", record: "6-2" },
      { rank: 6, team: "Oklahoma State", record: "7-0" },
      { rank: 7, team: "Tennessee", record: "7-1" },
      { rank: 8, team: "Texas Tech", record: "6-1" },
      { rank: 9, team: "Penn State", record: "6-1" },
      { rank: 10, team: "South Carolina", record: "7-1" },
      { rank: 11, team: "BYU", record: "6-2" },
      { rank: 12, team: "Ole Miss", record: "6-1" },
      { rank: 13, team: "Kentucky", record: "7-1" },
      { rank: 14, team: "Houston", record: "7-1" },
      { rank: 15, team: "Pittsburgh", record: "7-1" },
      { rank: 16, team: "UCLA", record: "7-1" },
      { rank: 17, team: "Duke", record: "6-1" },
      { rank: 18, team: "Louisville", record: "6-2" },
      { rank: 19, team: "Texas A&M", record: "6-2" },
      { rank: 20, team: "Michigan", record: "4-3" },
      { rank: 21, team: "Georgia", record: "4-3" },
      { rank: 22, team: "Missouri", record: "6-2" },
      { rank: 23, team: "Auburn", record: "5-2" },
      { rank: 24, team: "Iowa State", record: "5-2" },
      { rank: 25, team: "Minnesota", record: "5-2" },
    ],
  },
];
