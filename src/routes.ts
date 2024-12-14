import { Express, Request, Response } from "express";

function routes(app: Express) {
  /**
   * @openapi
   * /test:
   *  get:
   *     tags:
   *     - Test
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  app.get("/test", (req: Request, res: Response) => {});

  /**
   * @openapi
   * /pokemon:
   *  get:
   *     tags:
   *     - Pokémon
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  app.get("/pokemon", async (req: Request, res: Response) => {});

  /**
   * @openapi
   * /stats:
   *  get:
   *     tags:
   *     - Stats
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   */
  app.get("/stats", async (req: Request, res: Response) => {});

  /**
   * @openapi
   * /stats/:playerName:
   *  get:
   *     tags:
   *     - Stats
   *     description: Responds if the app is up and running
   *     responses:
   *       200:
   *         description: App is up and running
   *     parameters:
   *     - name: playerName
   *     in: path
   *     required: true
   *     type: string
   */
  app.post(`/stats/:playerName`, (req: Request, res: Response) => {});

  /**
   * @openapi
   * /match:
   *  get:
   *     tags:
   *     - Match
   *     description: Responds match details of a specific match
   *     responses:
   *       200:
   *         description: App is up and running
   */
  app.post(`/match`, (req: Request, res: Response) => {});

  /**
   * @openapi
   * /ranked/:playerId:
   *  get:
   *     tags:
   *     - Ranked
   *     description: Responds match details of a specific match
   *     responses:
   *       200:
   *         description: App is up and running
   *     parameters:
   *     - name: playerId
   *     in: path
   *     required: true
   *     type: string
   */
  app.post(`/ranked/:playerId`, (req: Request, res: Response) => {});
}

export { routes };
