/* ============================================================
   SCB THUNDERDOME — SCHEDULE DATA
   ------------------------------------------------------------
   Transcribed from in-game "Team Schedule" screenshots, 2 per
   team (weeks 0-8 and weeks 8-Conf Champ), overlap at week 8
   deduped by hand. Snapshot taken 2026-07-30.

   All 14 coaches are represented. Every user-vs-user matchup was
   cross-checked against BOTH coaches' screenshots and the
   home/away sides agree in all 13 cases — see the H2H list at the
   bottom of this comment.

   UCLA (RekenCrew) joined 2026-08-06, mid-Week 2, and is the one
   entry not from the 2026-07-30 snapshot. Its Week 7 game against
   Wisconsin agrees with Wisconsin's existing screenshot.

   WEEK MAPPING. The in-game table lists rows 0-15 and then a
   separate "Conf Champ" row. This file follows the convention the
   NCAA Legends leagues use and that script.js's weekLabel()
   expects:
       weeks 0-13     regular season games
       week 14        Army-Navy Week
       week 15        conference championship  <- the "Conf Champ" row
   The in-game row 15 is a bye for every team and is NOT carried
   over; nothing renders it, and carrying it would leave the
   championship with nowhere to live. Confirmed with Josh
   2026-07-30.

   STADIUMS. The Team Schedule screen doesn't display venue, so
   stadium is intentionally omitted. script.js treats it as
   optional (renders an empty span), so the site is happy without
   it. Can be filled in per entry later if it's wanted.

   THE POSTSEASON LIVES HERE TOO — weeks 15-19.

   A conference championship, a bowl or a CFP round that a COACHED
   team played is an ordinary row on that team's schedule, with three
   optional extra fields:

     neutral: true      no true home team. home/away still decide
                        which score is which; the row renders "VS" at
                        the named stadium rather than claiming "AT".
     title: "Rose Bowl" the game's own name. Replaces the week number
                        in the schedule row and the card footer.
     round: "cfp-qf"    the machine-readable round id. One of:
                        ccg, bowl-w1, bowl-w2,
                        cfp-r1, cfp-qf, cfp-sf, cfp-nc

   `round` IS LOAD-BEARING AND `title` IS NOT. Conference titles, CFP
   appearances and national championships on the roster cards are
   derived by matching `round`; a bowl game with a title and no round
   renders correctly and earns nothing. The round is never inferred
   from the title, because a sponsor renaming a bowl would silently
   stop counting it.

     { week: 17, opponent: "Miami", location: "vs", neutral: true,
       stadium: "AT&T Stadium", title: "Cotton Bowl", round: "cfp-qf",
       teamScore: 31, opponentScore: 24 }

   Weeks 16-19 are the game's Bowl Weeks 1-4. A team only has a row
   for a week it actually played, so most teams stop at 15 and a
   team with a first-round bye has no week 16 row at all.

   A game between two teams NOBODY coaches — most of the CFP bracket
   — does not belong here. It has no coach's schedule to live on and
   goes in postseason-data.js instead.

   SCORES. Only one game has been played: Virginia beat NC State
   33-14 in Week 0, against a CPU opponent, so there is no second
   entry to keep in sync. Every other week 0 row is a bye. Once a
   user-vs-user game goes final, add the score to BOTH teams'
   entries or it'll only show on one coach's schedule.

   NAME NOTE: "Arizona State" is spelled out rather than the sheet's
   "ASU" — the game spells it in full, and the abbreviation collides
   with Appalachian State. Likewise "Miami" here is the ACC
   Hurricanes, as the game spells it.

   CONFERENCES match league-data.js (ACC / SEC / XII / B1G / AAC)
   and are stock real-world alignment — this league does not use
   the custom realignment the NCAA Legends leagues do.

   TULANE HAS NO USER-VS-USER GAMES AT ALL — a full 12-game CPU
   slate. That is what the screenshots show, not a transcription
   gap. Wisconsin was in the same boat until UCLA joined and gave
   it the Week 7 game.

   THE 13 HEAD-TO-HEAD GAMES, for cross-checking:
     W3   SMU        at Louisville
     W5   Kentucky   at South Carolina
     W7   Virginia   at SMU
     W7   Okla State at Houston
     W7   Wisconsin  at UCLA
     W8   Colorado   at Oklahoma State
     W10  Va Tech    at SMU
     W10  Colorado   at Arizona State
     W11  Houston    at Colorado
     W12  Kentucky   at Missouri
     W12  Okla State at Arizona State
     W13  Louisville at Kentucky
     W13  Virginia   at Virginia Tech
   ============================================================ */
const TEAM_SCHEDULES = [
  /* ---------------------------- ACC ---------------------------- */
  {
    team: "Louisville",
    conference: "ACC",
    weeks: [
      { week: 0, note: "BYE" },
      { week: 1, opponent: "USF", location: "at", teamScore: 24, opponentScore: 17 },
      { week: 2, note: "BYE" },
      { week: 3, opponent: "Vanderbilt", location: "vs" },
      { week: 4, opponent: "Virginia", location: "vs" },
      { week: 5, opponent: "Clemson", location: "at" },
      { week: 6, opponent: "Georgia Tech", location: "at" },
      { week: 7, opponent: "Florida State", location: "at" },
      { week: 8, opponent: "Syracuse", location: "vs" },
      { week: 9, opponent: "North Carolina", location: "vs" },
      { week: 10, opponent: "Stanford", location: "at" },
      { week: 11, opponent: "California", location: "vs" },
      { week: 12, opponent: "Boston College", location: "vs" },
      { week: 13, opponent: "Kentucky", location: "at" },
      { week: 14, note: "Army-Navy Week" },
      { week: 15, note: "BYE" },
    ],
  },
  {
    team: "SMU",
    conference: "ACC",
    weeks: [
      { week: 0, note: "BYE" },
      { week: 1, opponent: "Tennessee", location: "at", neutral: true, teamScore: 56, opponentScore: 28 },
      { week: 2, opponent: "Oklahoma", location: "vs", teamScore: 126, opponentScore: 0 },
      { week: 3, opponent: "Virginia", location: "vs" },
      { week: 4, opponent: "Stanford", location: "vs" },
      { week: 5, opponent: "Virginia Tech", location: "at" },
      { week: 6, opponent: "California", location: "at" },
      { week: 7, opponent: "Florida Atlantic", location: "vs" },
      { week: 8, note: "BYE" },
      { week: 9, opponent: "Georgia Tech", location: "vs" },
      { week: 10, opponent: "Miami", location: "at" },
      { week: 11, opponent: "Pittsburgh", location: "at" },
      { week: 12, opponent: "North Carolina", location: "vs" },
      { week: 13, opponent: "Duke", location: "at" },
      { week: 14, note: "Army-Navy Week" },
      { week: 15, note: "BYE" },
    ],
  },
  {
    team: "Virginia",
    conference: "ACC",
    weeks: [
      { week: 0, opponent: "Arkansas State", location: "vs", teamScore: 38, opponentScore: 19 },
      { week: 1, opponent: "Clemson", location: "at", teamScore: 52, opponentScore: 21 },
      { week: 2, opponent: "Wake Forest", location: "vs" },
      { week: 3, opponent: "SMU", location: "at" },
      { week: 4, opponent: "Louisville", location: "at" },
      { week: 5, opponent: "FCS Midwest", location: "vs" },
      { week: 6, opponent: "North Carolina", location: "at" },
      { week: 7, opponent: "NC State", location: "at" },
      { week: 8, opponent: "Georgia Tech", location: "vs" },
      { week: 9, note: "BYE" },
      { week: 10, opponent: "BYU", location: "at" },
      { week: 11, opponent: "Florida State", location: "vs" },
      { week: 12, note: "BYE" },
      { week: 13, opponent: "Virginia Tech", location: "vs" },
      { week: 14, note: "Army-Navy Week" },
      { week: 15, note: "BYE" },
    ],
  },
  {
    /* Elton (EHDC12) moved here from Virginia Tech for 2027;
       Virginia Tech is CPU now. */
    team: "North Carolina",
    conference: "ACC",
    weeks: [
      { week: 0, note: "BYE" },
      { week: 1, opponent: "UCF", location: "vs", teamScore: 24, opponentScore: 19 },
      { week: 2, opponent: "Purdue", location: "at", teamScore: 17, opponentScore: 23 },
      { week: 3, opponent: "Wake Forest", location: "vs" },
      { week: 4, opponent: "UConn", location: "vs" },
      { week: 5, note: "BYE" },
      { week: 6, opponent: "Virginia", location: "vs" },
      { week: 7, opponent: "Virginia Tech", location: "at" },
      { week: 8, opponent: "Stanford", location: "at" },
      { week: 9, opponent: "Louisville", location: "at" },
      { week: 10, opponent: "California", location: "vs" },
      { week: 11, opponent: "Duke", location: "vs" },
      { week: 12, opponent: "SMU", location: "at" },
      { week: 13, opponent: "NC State", location: "at" },
      { week: 14, note: "Army-Navy Week" },
      { week: 15, note: "BYE" },
    ],
  },

  /* ---------------------------- SEC ---------------------------- */
  {
    team: "Kentucky",
    conference: "SEC",
    weeks: [
      { week: 0, opponent: "Ball State", location: "vs", teamScore: 31, opponentScore: 0 },
      { week: 1, opponent: "Toledo", location: "vs", teamScore: 59, opponentScore: 0 },
      { week: 2, opponent: "San Jose State", location: "vs", teamScore: 24, opponentScore: 14 },
      { week: 3, opponent: "LSU", location: "vs" },
      { week: 4, opponent: "Mississippi State", location: "vs" },
      { week: 5, opponent: "South Carolina", location: "at" },
      { week: 6, opponent: "Texas A&M", location: "at" },
      { week: 7, opponent: "Alabama", location: "vs" },
      { week: 8, note: "BYE" },
      { week: 9, opponent: "Oklahoma", location: "at" },
      { week: 10, opponent: "Arkansas", location: "vs" },
      { week: 11, opponent: "Missouri", location: "at" },
      { week: 12, note: "BYE" },
      { week: 13, opponent: "Louisville", location: "vs" },
      { week: 14, note: "Army-Navy Week" },
      { week: 15, note: "BYE" },
    ],
  },
  {
    team: "Missouri",
    conference: "SEC",
    weeks: [
      { week: 0, note: "BYE" },
      { week: 1, note: "BYE" },
      { week: 2, opponent: "San Diego State", location: "at", teamScore: 24, opponentScore: 27 },
      { week: 3, opponent: "Western Kentucky", location: "at", teamScore: 40, opponentScore: 14 },
      { week: 4, opponent: "Florida", location: "vs" },
      { week: 5, opponent: "Florida Atlantic", location: "vs" },
      { week: 6, opponent: "Georgia", location: "vs" },
      { week: 7, opponent: "LSU", location: "vs" },
      { week: 8, opponent: "Ole Miss", location: "at" },
      { week: 9, opponent: "Tennessee", location: "at" },
      { week: 10, opponent: "Illinois", location: "vs" },
      { week: 11, opponent: "Kentucky", location: "vs" },
      { week: 12, opponent: "Texas", location: "at" },
      { week: 13, opponent: "Arkansas", location: "at" },
      { week: 14, note: "Army-Navy Week" },
      { week: 15, note: "BYE" },
    ],
  },
  {
    team: "South Carolina",
    conference: "SEC",
    weeks: [
      { week: 0, note: "BYE" },
      { week: 1, opponent: "Wisconsin", location: "at", neutral: true, teamScore: 45, opponentScore: 31 },
      { week: 2, opponent: "Appalachian State", location: "vs", teamScore: 66, opponentScore: 0 },
      { week: 3, opponent: "Florida", location: "at", teamScore: 41, opponentScore: 6 },
      { week: 4, opponent: "Florida International", location: "vs" },
      { week: 5, opponent: "Kentucky", location: "vs" },
      { week: 6, opponent: "Arkansas", location: "vs" },
      { week: 7, opponent: "Auburn", location: "vs" },
      { week: 8, opponent: "Georgia", location: "at" },
      { week: 9, note: "BYE" },
      { week: 10, opponent: "Texas", location: "at" },
      { week: 11, opponent: "Tennessee", location: "vs" },
      { week: 12, opponent: "Mississippi State", location: "at" },
      { week: 13, opponent: "Clemson", location: "vs" },
      { week: 14, note: "Army-Navy Week" },
      { week: 15, note: "BYE" },
    ],
  },

  /* ---------------------------- XII ---------------------------- */
  {
    team: "Arizona State",
    conference: "XII",
    weeks: [
      { week: 0, note: "BYE" },
      { week: 1, opponent: "BYU", location: "vs", teamScore: 24, opponentScore: 14 },
      { week: 2, opponent: "Texas A&M", location: "vs", teamScore: 17, opponentScore: 14 },
      { week: 3, opponent: "UNLV", location: "at", teamScore: 45, opponentScore: 0 },
      { week: 4, opponent: "West Virginia", location: "at" },
      { week: 5, opponent: "Utah", location: "vs" },
      { week: 6, opponent: "Iowa State", location: "vs" },
      { week: 7, opponent: "TCU", location: "at" },
      { week: 8, opponent: "Wake Forest", location: "vs" },
      { week: 9, note: "BYE" },
      { week: 10, opponent: "Houston", location: "at" },
      { week: 11, opponent: "Colorado", location: "at" },
      { week: 12, opponent: "Cincinnati", location: "vs" },
      { week: 13, opponent: "Arizona", location: "vs" },
      { week: 14, note: "Army-Navy Week" },
      { week: 15, note: "BYE" },
    ],
  },
  {
    team: "Colorado",
    conference: "XII",
    weeks: [
      { week: 0, note: "BYE" },
      { week: 1, opponent: "Michigan State", location: "at", teamScore: 24, opponentScore: 19 },
      { week: 2, opponent: "Northwestern", location: "vs", teamScore: 28, opponentScore: 7 },
      { week: 3, opponent: "Northern Illinois", location: "vs" },
      { week: 4, opponent: "Iowa State", location: "at" },
      { week: 5, opponent: "Houston", location: "at" },
      { week: 6, opponent: "Arizona", location: "at" },
      { week: 7, opponent: "UCF", location: "at" },
      { week: 8, note: "BYE" },
      { week: 9, opponent: "West Virginia", location: "vs" },
      { week: 10, opponent: "Kansas", location: "vs" },
      { week: 11, opponent: "Arizona State", location: "vs" },
      { week: 12, opponent: "TCU", location: "vs" },
      { week: 13, opponent: "BYU", location: "at" },
      { week: 14, note: "Army-Navy Week" },
      { week: 15, note: "BYE" },
    ],
  },
  {
    team: "Houston",
    conference: "XII",
    weeks: [
      { week: 0, opponent: "Georgia Southern", location: "vs", teamScore: 49, opponentScore: 25 },
      { week: 1, opponent: "LSU", location: "at", neutral: true, teamScore: 50, opponentScore: 21 },
      { week: 2, note: "BYE" },
      { week: 3, opponent: "Iowa State", location: "at", teamScore: 36, opponentScore: 24 },
      { week: 4, opponent: "Central Michigan", location: "vs" },
      { week: 5, opponent: "Colorado", location: "vs" },
      { week: 6, opponent: "Cincinnati", location: "at" },
      { week: 7, opponent: "Kansas", location: "vs" },
      { week: 8, opponent: "BYU", location: "vs" },
      { week: 9, opponent: "Texas Tech", location: "vs" },
      { week: 10, opponent: "Arizona State", location: "vs" },
      { week: 11, opponent: "Arizona", location: "at" },
      { week: 12, note: "BYE" },
      { week: 13, opponent: "TCU", location: "at" },
      { week: 14, note: "Army-Navy Week" },
      { week: 15, note: "BYE" },
    ],
  },
  {
    team: "Oklahoma State",
    conference: "XII",
    weeks: [
      { week: 0, opponent: "Tulsa", location: "vs", teamScore: 47, opponentScore: 24 },
      { week: 1, opponent: "Ball State", location: "vs", teamScore: 38, opponentScore: 21 },
      { week: 2, opponent: "Arkansas", location: "at", teamScore: 31, opponentScore: 20 },
      { week: 3, opponent: "West Virginia", location: "vs" },
      { week: 4, opponent: "Arizona", location: "vs" },
      { week: 5, opponent: "TCU", location: "vs" },
      { week: 6, opponent: "Baylor", location: "at" },
      { week: 7, opponent: "Cincinnati", location: "at" },
      { week: 8, note: "BYE" },
      { week: 9, note: "BYE" },
      { week: 10, opponent: "Utah", location: "at" },
      { week: 11, opponent: "BYU", location: "vs" },
      { week: 12, opponent: "Iowa State", location: "vs" },
      { week: 13, opponent: "Kansas", location: "at" },
      { week: 14, note: "Army-Navy Week" },
      { week: 15, note: "BYE" },
    ],
  },

  /* ---------------------------- B1G ---------------------------- */
  {
    /* Was a full CPU slate at transcription time. UCLA joining on
       2026-08-06 turned the Week 7 trip into this team's only
       user-vs-user game. */
    team: "Wisconsin",
    conference: "B1G",
    weeks: [
      { week: 0, opponent: "Pittsburgh", location: "at", neutral: true, teamScore: 33, opponentScore: 25 },
      { week: 1, opponent: "South Carolina", location: "vs", neutral: true, teamScore: 31, opponentScore: 45 },
      { week: 2, opponent: "Penn State", location: "vs", teamScore: 45, opponentScore: 9 },
      { week: 3, opponent: "Colorado State", location: "vs", teamScore: 49, opponentScore: 0 },
      { week: 4, opponent: "USC", location: "at" },
      { week: 5, opponent: "Nebraska", location: "vs" },
      { week: 6, opponent: "Iowa", location: "vs" },
      { week: 7, note: "BYE" },
      { week: 8, opponent: "Northwestern", location: "vs" },
      { week: 9, opponent: "Michigan State", location: "at" },
      { week: 10, opponent: "UCLA", location: "vs" },
      { week: 11, opponent: "Illinois", location: "at" },
      { week: 12, note: "BYE" },
      { week: 13, opponent: "Minnesota", location: "at" },
      { week: 14, note: "Army-Navy Week" },
      { week: 15, note: "BYE" },
    ],
  },
  {
    /* RekenCrew joined the league as UCLA on 2026-08-06, mid-Week 2,
       with the first two games already played (both wins). Only
       user-vs-user game is Wisconsin at UCLA in Week 7; that entry is
       mirrored on the Wisconsin schedule above. */
    team: "UCLA",
    conference: "B1G",
    weeks: [
      { week: 0, opponent: "Hawai'i", location: "at", teamScore: 56, opponentScore: 0 },
      { week: 1, opponent: "California", location: "vs", teamScore: 38, opponentScore: 10 },
      { week: 2, opponent: "Florida", location: "vs", teamScore: 31, opponentScore: 21 },
      { week: 3, opponent: "Purdue", location: "at", teamScore: 49, opponentScore: 10 },
      { week: 4, opponent: "Iowa", location: "at" },
      { week: 5, opponent: "Northwestern", location: "vs" },
      { week: 6, note: "BYE" },
      { week: 7, opponent: "Michigan", location: "vs" },
      { week: 8, opponent: "Illinois", location: "at" },
      { week: 9, opponent: "Oregon", location: "vs" },
      { week: 10, opponent: "Wisconsin", location: "at" },
      { week: 11, note: "BYE" },
      { week: 12, opponent: "Rutgers", location: "vs" },
      { week: 13, opponent: "USC", location: "at" },
      { week: 14, note: "Army-Navy Week" },
      { week: 15, note: "BYE" },
    ],
  },

  /* ---------------------------- AAC ---------------------------- */
  {
    /* Also a full CPU slate — see the note on Wisconsin. */
    team: "Tulane",
    conference: "AAC",
    weeks: [
      { week: 0, opponent: "Wake Forest", location: "at", teamScore: 38, opponentScore: 16 },
      { week: 1, opponent: "Louisiana", location: "vs", teamScore: 41, opponentScore: 23 },
      { week: 2, opponent: "Southern Mississippi", location: "at" },
      { week: 3, opponent: "New Mexico State", location: "vs" },
      { week: 4, note: "BYE" },
      { week: 5, opponent: "Memphis", location: "vs" },
      { week: 6, opponent: "Navy", location: "vs" },
      { week: 7, opponent: "UAB", location: "at" },
      { week: 8, opponent: "Army", location: "vs" },
      { week: 9, note: "BYE" },
      { week: 10, opponent: "Tulsa", location: "at" },
      { week: 11, opponent: "UTSA", location: "at" },
      { week: 12, opponent: "Temple", location: "at" },
      { week: 13, opponent: "Rice", location: "vs" },
      { week: 14, note: "Army-Navy Week" },
      { week: 15, note: "BYE" },
    ],
  },

  /* ------------------------ 2027 ADDITIONS ------------------------ */
  {
    /* Cammo took over Memphis for 2027. */
    team: "Memphis",
    conference: "AAC",
    weeks: [
      { week: 0, note: "BYE" },
      { week: 1, opponent: "Miami University", location: "vs", teamScore: 34, opponentScore: 21 },
      { week: 2, opponent: "Arkansas State", location: "at", teamScore: 31, opponentScore: 38 },
      { week: 3, opponent: "Southern Mississippi", location: "vs" },
      { week: 4, opponent: "Middle Tennessee", location: "at" },
      { week: 5, opponent: "Tulane", location: "at" },
      { week: 6, note: "BYE" },
      { week: 7, opponent: "UTSA", location: "at" },
      { week: 8, opponent: "Temple", location: "vs" },
      { week: 9, opponent: "Charlotte", location: "vs" },
      { week: 10, opponent: "East Carolina", location: "at" },
      { week: 11, opponent: "UAB", location: "vs" },
      { week: 12, opponent: "Tulsa", location: "vs" },
      { week: 13, opponent: "Navy", location: "at" },
      { week: 14, note: "Army-Navy Week" },
      { week: 15, note: "BYE" },
    ],
  },
  {
    /* Larry (evillarry) took over San Diego State for 2027. Pac-12. */
    team: "San Diego State",
    conference: "PAC",
    weeks: [
      { week: 0, note: "BYE" },
      { week: 1, opponent: "Eastern Michigan", location: "at", teamScore: 35, opponentScore: 0 },
      { week: 2, opponent: "Missouri", location: "vs", teamScore: 27, opponentScore: 24 },
      { week: 3, opponent: "Oklahoma", location: "at", teamScore: 17, opponentScore: 35 },
      { week: 4, note: "BYE" },
      { week: 5, opponent: "North Texas", location: "vs" },
      { week: 6, opponent: "Utah State", location: "at" },
      { week: 7, opponent: "Fresno State", location: "at" },
      { week: 8, opponent: "Washington State", location: "at" },
      { week: 9, opponent: "Fresno State", location: "vs" },
      { week: 10, opponent: "Texas State", location: "at" },
      { week: 11, opponent: "Oregon State", location: "vs" },
      { week: 12, opponent: "Boise State", location: "vs" },
      { week: 13, opponent: "Colorado State", location: "vs" },
      { week: 14, note: "Army-Navy Week" },
      { week: 15, note: "BYE" },
    ],
  },
];
