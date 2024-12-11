import { kraftonEndpoints } from "../enums/kraftonEndpoints";

export type kraftonType = {
  [kraftonEndpoints.getMatch]: [string];
  [kraftonEndpoints.getPlayerData]: [string];
  [kraftonEndpoints.getPlayerRankedStats]: [string, string, string];
};
