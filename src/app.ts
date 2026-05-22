import express from "express";
import routes from "./routes/index.js";
import notFound from "./middleware/not-found.js";
import { initDatabase } from "./database/init.js";

const app = express();

app.use(express.json());

app.use(routes);

app.use(notFound);

async function bootstrap() {
  await initDatabase();
}

bootstrap();

export default app;
