import dotenv from "dotenv";
dotenv.config();

export const gv = {
  port: process.env.PORT || 5000,
  mongodbUri: process.env.MONGODB_URI || "mongodb://localhost:27017/skyGPT",
};
