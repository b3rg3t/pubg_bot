import { matchIncludedType } from "src/models/enums/matchIncludeType";
import { matchType } from "src/models/types/matchType";
import { playerType, pubgPlayer } from "src/models/types/playerType";
import { matchPlayerType } from "src/models/types/matchPlayerType";
import { matchTeamType } from "src/models/types/matchTeamType";
import { matchStats } from "src/models/types/matchStats";

const isMatchPlayerType = (include: any): include is matchPlayerType => {
  return include && include.attributes.stats;
};

const isMatchTeamType = (include: any): include is matchTeamType => {
  return include && include.relationships;
};

export const findTeamStats = (matchStats: matchType, player: playerType): matchStats | undefined => {
  const playerMatchStats = matchStats.included.find(
    (include) =>
      include.type === matchIncludedType.PLAYER &&
      isMatchPlayerType(include) &&
      include.attributes.stats.playerId === player.data[0].id
  );

  if (playerMatchStats) {
    const teamMatchStats = matchStats.included.find(
      (include) =>
        include.type === matchIncludedType.TEAM &&
        isMatchTeamType(include) &&
        include.relationships.participants.data.find(
          (participant) => participant.id === playerMatchStats.id
        )
    );

    if (isMatchTeamType(teamMatchStats)) {
      const { data } = teamMatchStats.relationships.participants;

      const playersMatchStats: matchPlayerType[] = [];

      matchStats.included.forEach((include) => {
        const playerStats = data.find((player) => player.id === include.id);
        if (playerStats && isMatchPlayerType(include)) {
          playersMatchStats.push(include);
        }
      });
      
      return {
        teamMatchStats: teamMatchStats,
        playerStats: playersMatchStats,
      };
    } 
    return undefined
  }
};
