import { matchPartisipantEnum as matchParticipantEnum } from "../enums/matchParticipantEnum";

export type matchPlayerType = {
  type: matchParticipantEnum;
  id: string;
  attributes: {
    actor: string;
    shardId: string;
    stats: {
      DBNOs: number;
      assists: number;
      boosts: number;
      damageDealt: number;
      deathType: string;
      headshotKills: number;
      heals: number;
      killPlace: number;
      killStreaks: number;
      kills: number;
      longestKill: number;
      name: string;
      playerId: string;
      revives: number;
      rideDistance: number;
      roadKills: number;
      swimDistance: number;
      teamKills: number;
      timeSurvived: number;
      vehicleDestroys: number;
      walkDistance: number;
      weaponsAcquired: number;
      winPlace: number;
    };
  };
};
