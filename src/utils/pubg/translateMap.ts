import { text } from "src/localization/en";
import { mapName } from "src/models/enums/mapNames";

export const translateMap = (mapName: mapName) => {
  if (text.mapName?.[mapName]) {
    return text.mapName[mapName];
  }
  return `Unknown`;
};
