import mongoose from "mongoose";

const dbConnection = (URL) => {
  try {
    mongoose.connect(URL);
  } catch (error) {
    console.log(error);
  }
};

export default dbConnection;
