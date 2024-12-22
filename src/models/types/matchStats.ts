import { matchPlayerType } from "./matchPlayerType";
import { matchTeamType } from "./matchTeamType";

export type matchStats = {
    teamMatchStats: matchTeamType;
    playerStats: matchPlayerType[]
}