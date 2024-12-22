import { mapName } from "src/models/enums/mapNames";
import { matchStats } from "src/models/types/matchStats";
import { matchType } from "src/models/types/matchType";
import {
  formatSecToMinuAndSec,
  formatTime,
  renderMessage,
} from "src/utils/helpers";

export const matchResponse = (
  teamStats: matchStats,
  matchData: matchType,
  playerName?: string
) => {
  const { teamMatchStats, playerStats } = teamStats;
  const { relationships, attributes } = matchData.data;

  const message = {
    header: `Latest game - ${playerName}`,
    messages: [
      `Total players: ${relationships.rosters.data.length}`,
      `Start time: ${formatTime(attributes.createdAt)}`,
      `Duration: ${formatSecToMinuAndSec(attributes.duration)}`,
      `Map: ${attributes.mapName}`,
      `Placement: ${teamMatchStats.attributes.stats.rank}`,
      `Team menbers: ${playerStats.length}`,
    ],
  };

  return renderMessage(message);
};
