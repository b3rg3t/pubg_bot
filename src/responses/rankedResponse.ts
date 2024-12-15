import { playerRankedStatsType } from "src/models/types/playerRankedStatsType";
import {
  calculateAvgDamage,
  calculateKD,
  calculateKDA,
  formatToPercentage,
  renderMessage,
} from "src/utils/helpers";

const rankedResponse = (
  playerRankedStats: playerRankedStatsType,
  playerName: string
) => {
  const {
    kills,
    deaths,
    winRatio,
    wins,
    currentRankPoint,
    currentTier,
    assists,
    roundsPlayed,
    damageDealt,
  } = playerRankedStats.data.attributes.rankedGameModeStats["squad-fpp"];

  const message = {
    header: `Stats ${playerName}`,
    messages: [
      `Rank: ${currentTier.tier} ${currentTier.subTier}`,
      `Rank points: ${currentRankPoint}`,
      `KD: ${calculateKD(kills, deaths)}`,
      `KDA: ${calculateKDA(kills, deaths, assists)}`,
      `AVG damage: ${calculateAvgDamage(roundsPlayed, damageDealt)}`,
      `Matches: ${roundsPlayed}`,
      `Total kills: ${kills}`,
      `Total deaths: ${deaths}`,
      `Total assists: ${assists}`,
      `Total wins: ${wins}`,
      `Win rate: ${formatToPercentage(winRatio)}`,
    ],
  };

  return renderMessage(message);
};

export { rankedResponse };
