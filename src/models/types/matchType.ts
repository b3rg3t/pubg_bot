import { matchAssetType } from "./matchAssetType";
import { matchPlayerType } from "./matchPlayerType";
import { matchTeamType } from "./matchTeamType";

export type matchType = {
  data: {
    type: string;
    id: string;
    attributes: {
      shardId: string;
      matchType: string;
      seasonState: string;
      createdAt: string;
      duration: number;
      stats: null;
      gameMode: string;
      titleId: string;
      tags: null;
      mapName: string;
      isCustomMatch: boolean;
    };
    relationships: {
      rosters: {
        data: any[];
      };
      assets: {
        data: any[];
      };
    };
    links: {
        schema: string,
        self: string,
      },
  };
  included: Array<matchPlayerType | matchTeamType | matchAssetType>;
  links: {
    self: string;
  };
  meta: {};
};
