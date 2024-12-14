import { kraftonEndpoints } from "src/models/enums/kraftonEndpoints";
import { get } from "../middleware/kraftonProvider";

const pubgProvider = () => {
  const getPlayerData = async (playerName: string) => {
    const response = await get({
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

  const getPlayerRankedStats = async (playerId: string) => {
    const response = await get({
      url: kraftonEndpoints.getPlayerRankedStats,
      args: ["steam", "33", playerId],
    });
    return response;
  };

  return { getPlayerData, getMatch, getPlayerRankedStats };
};

export { pubgProvider };
