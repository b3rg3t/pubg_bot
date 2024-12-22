import { matchPlayerType } from "src/models/types/matchPlayerType";
import {
  addUnderlineToText,
  formatDistance,
  formatSecToMinuAndSec,
  formatToFixedTwo,
  renderMessage,
} from "../helpers";

export const renderPlayerStats = (player: matchPlayerType): string[] => {
  const {
    kills,
    assists,
    name,
    timeSurvived,
    rideDistance,
    walkDistance,
    revives,
    damageDealt
  } = player.attributes.stats;

  const messages = [
    `${name}`,
    addUnderlineToText(name),
    `Kills: ${kills}`,
    `Assists: ${assists}`,
    `Damage: ${formatToFixedTwo(damageDealt)}`, 
    `Time survived: ${formatSecToMinuAndSec(timeSurvived)}`,
    `Ride distance: ${formatDistance(rideDistance)}`,
    `Walk distance: ${formatDistance(walkDistance)}`,
    `Revives: ${revives}`,
  ];

  return messages;
};
