import { pubgProvider } from "src/providers/pubgProvider";
import { findActiveSeasonId } from "src/utils/findActiveSeason";

const pubgOperations = () => {
  const { getSeasons, getPlayerRankedStats, getPlayerData } = pubgProvider();
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
  return { getPubgPlayerRankedStats };
};

export { pubgOperations };
