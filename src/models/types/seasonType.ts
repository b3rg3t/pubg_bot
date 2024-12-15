export type seasonType = {
  data: pubgSeason[];
  links: {
    self: string;
  };
  meta: {};
};

export type pubgSeason = {
  type: string;
  id: string;
  attributes: { isCurrentSeason: boolean; isOffseason: boolean };
};
