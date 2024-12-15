import { playerRankedStatsType } from "src/models/types/playerRankedStatsType";

export const playerRankedStatsData: playerRankedStatsType = {
  data: {
    type: "rankedplayerstats",
    attributes: {
      rankedGameModeStats: {
        "squad-fpp": {
          currentTier: {
            tier: "Platinum",
            subTier: "2",
          },
          currentRankPoint: 2815,
          bestTier: {
            tier: "Platinum",
            subTier: "2",
          },
          bestRankPoint: 2829,
          roundsPlayed: 27,
          avgRank: 5.740741,
          avgSurvivalTime: 0,
          top10Ratio: 0.8148148,
          winRatio: 0.22222222,
          assists: 17,
          wins: 6,
          kda: 2,
          kdr: 0,
          kills: 31,
          deaths: 24,
          roundMostKills: 0,
          longestKill: 0,
          headshotKills: 0,
          headshotKillRatio: 0,
          damageDealt: 7047.1846,
          dBNOs: 39,
          reviveRatio: 0,
          revives: 0,
          heals: 0,
          boosts: 0,
          weaponsAcquired: 0,
          teamKills: 0,
          playTime: 0,
          killStreak: 0,
        },
      },
    },
    relationships: {
      player: {
        data: {
          type: "player",
          id: "account.a9398aa0d0f14cf792ffb44d7fa65c71",
        },
      },
      season: {
        data: {
          type: "season",
          id: "division.bro.official.pc-2018-33",
        },
      },
    },
  },
  links: {
    self: "https://api.pubg.com/shards/steam/players/account.a9398aa0d0f14cf792ffb44d7fa65c71/seasons/division.bro.official.pc-2018-33/ranked",
  },
  meta: {},
};
