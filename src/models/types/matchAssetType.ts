import { matchPartisipantEnum } from "../enums/matchParticipantEnum";

export type matchAssetType = {
  type: matchPartisipantEnum;
  id: string;
  attributes: {
    name: string;
    description: string;
    createdAt: string;
    URL: string;
  };
};
