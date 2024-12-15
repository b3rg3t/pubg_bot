import { pubgMatch } from "src/models/types/playerType";

export const findLatestMatchId = (matches: pubgMatch[] ) => {
    const matchId = matches[0].id
    return matchId;
}