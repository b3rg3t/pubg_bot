export enum kraftonEndpoints {
    /**
     * {0} - $playerName
     */
    getPlayerData = "/players?filter[playerNames]={0}",
    /**
     * {0} - $platform
     * {1} - $playerId
     * {2} - $seasonId
     */
    getPlayerRankedStats = "/{0}/players/{1}/seasons/{2}/ranked",
    /**
     * {0} - $matchId
     */
    getMatch = "/matches/{0}",
    /**
     * @seasons - all season id's
     */
    getSeasons = "/seasons"
}