import { matchIncludedType } from "../enums/matchIncludeType";

export type matchAssetType = {
  type: matchIncludedType;
  id: string;
  attributes: {
    name: string;
    description: string;
    createdAt: string;
    URL: string;
  };
};
