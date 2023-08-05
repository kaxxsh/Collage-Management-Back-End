import Express from "express";
import {} from "dotenv/config";

const app = Express();

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Server running on port ${process.env.SERVER_PORT}`)
);
