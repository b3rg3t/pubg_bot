import { kraftonEndpoints } from "src/models/enums/kraftonEndpoints";
import { get } from "../middleware/kraftonProvider";
import { playerType } from "src/models/types/playerType";
import { pubgSeason, seasonType } from "src/models/types/seasonType";

const pubgProvider = () => {
  const getPlayerData = async (playerName: string) => {
    const response: playerType | undefined = await get<playerType>({
      url: kraftonEndpoints.getPlayerData,
      args: [playerName],
    });
    return response;
  };

  const getMatch = async (playerName: string) => {
    const response = await get({
      url: kraftonEndpoints.getPlayerData,
      args: [playerName],
    });
    return response;
  };

  const getPlayerRankedStats = async (
    seasonId: pubgSeason["id"],
    playerId: string
  ) => {
    const response = await get({
      url: kraftonEndpoints.getPlayerRankedStats,
      args: ["steam", playerId, seasonId],
    });
    return response;
  };

  const getSeasons = async () => {
    const response: seasonType | undefined = await get<seasonType>({
      url: kraftonEndpoints.getSeasons,
    });
    return response;
  };

  return { getPlayerData, getMatch, getPlayerRankedStats, getSeasons };
};

export { pubgProvider };
