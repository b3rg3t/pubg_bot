export enum kraftonEndpoints {
    /**
     * {0} - $playerName
     */
    getPlayerData = "/players?filter[playerNames]={0}",
    /**
     * {0} - $playerId
     * {1} - $seasonId
     */
    getPlayerRankedStats = "/players/{0}/seasons/{1}/ranked",
    /**
     * {0} - $matchId
     */
    getMatch = "/matches/{0}",
    /**
     * @seasons - all season id's
     */
    getSeasons = "/seasons"
}