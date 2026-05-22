import express from "express";
import routes from "./routes/index.js";
import notFound from "./middleware/not-found.js";

const app = express();

app.use(express.json());

app.use(routes);

app.use(notFound);

export default app;
