import express from "express";
import { swaggerDocs } from "./utils/swagger";
import { routes } from "./routes";

const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`it's alive on http://localhost:${PORT}`);
  routes(app);
  swaggerDocs(app, PORT);
});

export { app };
