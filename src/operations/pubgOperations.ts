import { pubgProvider } from "src/providers/pubgProvider";
import { matchResponse } from "src/responses/matchResponse";
import { findActiveSeasonId } from "src/utils/pubg/findActiveSeason";
import { findLatestMatchId } from "src/utils/pubg/findLatestMatch";
import { findTeamStats } from "src/utils/pubg/findTeamStats";

const pubgOperations = () => {
  const { getSeasons, getPlayerRankedStats, getPlayerData, getMatch } =
    pubgProvider();

  const getPubgPlayerRankedStats = async (playerName: string) => {
    const seasons = await getSeasons();
    const player = await getPlayerData(playerName);

    if (seasons && player) {
      const seasonId = findActiveSeasonId(seasons.data);
      if (seasonId) {
        const playerRankedStats = await getPlayerRankedStats(
          seasonId,
          player.data[0].id
        );

        return playerRankedStats;
      }
    }
  };

  const getPubgLatestMatchStats = async (playerName: string) => {
    const player = await getPlayerData(playerName);
    const matchId = findLatestMatchId(
      player?.data[0].relationships.matches.data ?? []
    );
    const matchStats = await getMatch(matchId);

    if (player && matchId && matchStats) {
      const teamStats = findTeamStats(matchStats, player);

      if (teamStats) {
        return {
          teamStats,
          matchStats,
          playerName: player.data[0].attributes.name,
        };
      }
    }
  };

  return { getPubgPlayerRankedStats, getPubgLatestMatchStats };
};

export { pubgOperations };
