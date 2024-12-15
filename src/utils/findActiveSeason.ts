import { pubgSeason } from "src/models/types/seasonType";

const findActiveSeasonId = (seasons: pubgSeason[]) => {
  const seasonId = seasons.find(
    (season) => season.attributes.isCurrentSeason
  )?.id;
  return seasonId;
};

export { findActiveSeasonId };
