import Express from "express";
import {} from "dotenv/config";
import dbConnection from "./db/dbConnection.js";

const app = Express();

app.listen(process.env.SERVER_PORT, () => {
  try {
    dbConnection(process.env.DB_URL);
    console.log(`Server running on port ${process.env.SERVER_PORT}`);
  } catch (error) {
    console.log(error);
  }
});
