export enum kraftonEndpoints {
    /**
     * {0} - $playerName
     */
    getPlayerData = "/players?filter[playerNames]={0}",
    /**
     * {0} - $playerId
     * {1} - $seasonId
     */
    getPlayerRankedStats = "/players/{1}/seasons/{2}/ranked",
    /**
     * {0} - $matchId
     */
    getMatch = "/matches/{0}",
    /**
     * @seasons - all season id's
     */
    getSeasons = "/seasons"
}