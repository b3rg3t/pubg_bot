export type playerRankedStatsType = {
  data: {
    type: string;
    attributes: {
      rankedGameModeStats: {
        "squad-fpp": {
          currentTier: {
            tier: string;
            subTier: string;
          };
          currentRankPoint: number;
          bestTier: {
            tier: string;
            subTier: string;
          };
          bestRankPoint: number;
          roundsPlayed: number;
          avgRank: number;
          avgSurvivalTime: number;
          top10Ratio: number;
          winRatio: number;
          assists: number;
          wins: number;
          kda: number;
          kdr: number;
          kills: number;
          deaths: number;
          roundMostKills: number;
          longestKill: number;
          headshotKills: number;
          headshotKillRatio: number;
          damageDealt: number;
          dBNOs: number;
          reviveRatio: number;
          revives: number;
          heals: number;
          boosts: number;
          weaponsAcquired: number;
          teamKills: number;
          playTime: number;
          killStreak: number;
        };
      };
    };
    relationships: {
        player: {
          data: {
            type: string,
            id: string,
          },
        },
        season: {
          data: {
            type: string,
            id: string,
          },
        },
      },
  };
  links: {
    self: string,
  },
  meta: {},
};
