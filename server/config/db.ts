import config from "config";
import mongoose from "mongoose";

const dbUri: string = config.get("mongoUri");

const connectDB = async () => {
  try {
    await mongoose.connect(dbUri);
    console.log("db connection established");
  } catch (error) {
    console.log("could not connect to db :(", error);
    process.exit(1);
  }
};

export default connectDB;
