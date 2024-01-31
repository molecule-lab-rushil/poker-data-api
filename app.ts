import express, { json, urlencoded } from "express";
import morgan from "morgan";

const app = express();

app.use(morgan("dev"));

app.use(json({ limit: "10kb" }));
app.use(urlencoded({ limit: "10kb", extended: true }));

app.get("/", (req, res) => {
  console.log(";eho");
  res.status(200).send("Thanks for using Molecule NodeJS Service Starter");
});

export default app;
