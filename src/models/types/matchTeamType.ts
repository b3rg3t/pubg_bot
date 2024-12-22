import { matchIncludedType } from "../enums/matchIncludeType";

export type matchTeamType = {
  type: matchIncludedType;
  id: string;
  attributes: {
    stats: { rank: number; teamId: number };
    won: string;
    shardId: string;
  };
  relationships: {
    team: { data: null };
    participants: {
      data: { type: string; id: string }[];
    };
  };
};
