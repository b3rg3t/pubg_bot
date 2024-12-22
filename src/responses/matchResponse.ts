import { mapName } from "src/models/enums/mapNames";
import { matchStats } from "src/models/types/matchStats";
import { matchType } from "src/models/types/matchType";
import {
  formatSecToMinuAndSec,
  formatTime,
  renderMessage,
} from "src/utils/helpers";
import { renderPlayerStats } from "src/utils/pubg/renderPlayerStats";
import { translateMap } from "src/utils/pubg/translateMap";

export const matchResponse = (
  teamStats: matchStats,
  matchData: matchType,
  playerName?: string
) => {
  const { teamMatchStats, playerStats } = teamStats;
  const { relationships, attributes } = matchData.data;

  const playerMessages: string[] = [];

  playerStats.forEach((player) =>
    playerMessages.push(
      ...renderPlayerStats(player),
      `------------------------------`
    )
  );

  const totalKills = playerStats.reduce(
    (sum, player) => sum + player.attributes.stats.kills,
    0
  );

  const message = {
    header: `Latest game - ${playerName}`,
    messages: [
      `Map: ${translateMap(attributes.mapName)}`,
      `Start time: ${formatTime(attributes.createdAt)}`,
      `Total players: ${relationships.rosters.data.length}`,
      `Duration: ${formatSecToMinuAndSec(attributes.duration)}`,
      `Placement: ${teamMatchStats.attributes.stats.rank}`,
      `Team members: ${playerStats.length}`,
      `Total kills: ${totalKills}`,
      `------------------------------`,
      ...playerMessages,
    ],
  };

  return renderMessage(message);
};
