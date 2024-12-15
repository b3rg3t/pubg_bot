import { matchPartisipantEnum } from "../enums/matchParticipantEnum";
import { matchPlayerType } from "./matchPlayerType";

export type matchTeamType = {
  type: string;
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
