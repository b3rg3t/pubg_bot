export type playerType = {
  data: pubgPlayer[];
  links: {
    self: string;
  };
  meta: {};
};

export type pubgPlayer = {
  type: string;
  id: string;
  attributes: {
    banType: string;
    clanId: string;
    name: string;
    stats?: any;
    titleId: string;
    shardId: string;
    patchVersion: string;
  };
  relationships: {
    assets: {
      data: any[];
    };
    matches: {
      data: pubgMatch[];
    };
  };
  links: {
    self: string;
    schema: string;
  };
};

export type pubgMatch = {
  type: string;
  id: string;
};
