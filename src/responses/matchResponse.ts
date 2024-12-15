import { matchType } from "src/models/types/matchType";
import { renderMessage } from "src/utils/helpers";

export const matchResponse = (matchStats: matchType, playerId?: string) => {
  const { relationships } = matchStats.data;

  const message = {
    header: `Latest game`,
    messages: [`Players: ${relationships.rosters.data.length}`],
  };

  return renderMessage(message)
};
