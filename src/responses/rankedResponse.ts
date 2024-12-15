import { playerRankedStatsType } from "src/models/types/playerRankedStatsType";
import { calculateKD, calculateKDA, formatToPercentage } from "src/utils/helpers";

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
  } = playerRankedStats.data.attributes.rankedGameModeStats["squad-fpp"];



  const message = {
    header: `Stats ${playerName}`,
    messages: [
      `Rank: ${currentTier.tier} ${currentTier.subTier}`,
      `Rank points: ${currentRankPoint}`,
      `KD: ${calculateKD(kills, deaths)}`,
      `KDA: ${calculateKDA(kills, deaths, assists)}`,
      `Matches: ${roundsPlayed}`,
      `Total kills: ${kills}`,
      `Total deaths: ${deaths}`,
      `Total assists: ${assists}`,
      `Total wins: ${wins}`,
      `Win rate: ${formatToPercentage(winRatio)}`,
    ],
  };

  const renderMessage = () => {
    return `
        ### ${message.header}
        \`\`\`${message.messages.join("\n")}\`\`\`
    `;
  };

  const responseMessage = renderMessage();

  return responseMessage;
};

export { rankedResponse };
