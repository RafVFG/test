import express, { json, Router } from "express";
import { readdirSync } from "fs";
import "dotenv/config";

import { contentType } from "./config/middleware/content-type";
import process from "./interfaces/server";

const app = express();
app.use(json());
app.use(contentType);

const router = Router();
app.use("/api", router);

const routes = readdirSync(`${__dirname}/routes`);
routes.forEach(async (file) => {
    (await import(`./routes/${file}`)).default(router);
})

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`http://${process.env.HOST}:${process.env.PORT}`);
});
