import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import batchRoutes from "./routes/batchRoutes.js";
import dotenv from "dotenv";
dotenv.config();

// Logic to connect to Database:
async function connectToDB() {
  try {
    const MONGO_URL =
      process.env.MONGO_URL || "mongodb://localhost:27017/quizflow";
    await mongoose.connect(MONGO_URL);
    console.log("✅ Connected To DB!!...");
  } catch (err) {
    console.log("❌ DB Connection Failed...", err);
  }
}

connectToDB();

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.send("Server Is Running Perfectly!!");
});
app.use("/user", userRoutes);
app.use("/batch", batchRoutes);

const PORT = process.env.PORT || 4400;
app.listen(PORT, () => {
  console.log(`Server Is Running at:\nhttp://localhost:${PORT}/health`);
});

// npm init -y
// npm i express cors mongoose
// npm i nodemon -g
// npm run dev
