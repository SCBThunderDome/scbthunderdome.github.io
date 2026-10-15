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
    ],
  },
  {
    team: "SMU",
    conference: "ACC",
    weeks: [
    ],
  },
  {
    team: "Virginia",
    conference: "ACC",
    weeks: [
    ],
  },
  {
    team: "Virginia Tech",
    conference: "ACC",
    weeks: [
    ],
  },

  /* ---------------------------- SEC ---------------------------- */
  {
    team: "Kentucky",
    conference: "SEC",
    weeks: [
    ],
  },
  {
    team: "Missouri",
    conference: "SEC",
    weeks: [
    ],
  },
  {
    team: "South Carolina",
    conference: "SEC",
    weeks: [
    ],
  },

  /* ---------------------------- XII ---------------------------- */
  {
    team: "Arizona State",
    conference: "XII",
    weeks: [
    ],
  },
  {
    team: "Colorado",
    conference: "XII",
    weeks: [
    ],
  },
  {
    team: "Houston",
    conference: "XII",
    weeks: [
    ],
  },
  {
    team: "Oklahoma State",
    conference: "XII",
    weeks: [
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
    ],
  },

  /* ---------------------------- AAC ---------------------------- */
  {
    /* Also a full CPU slate — see the note on Wisconsin. */
    team: "Tulane",
    conference: "AAC",
    weeks: [
    ],
  },
];
