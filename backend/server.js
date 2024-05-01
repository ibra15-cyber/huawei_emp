import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import empRouter from "./routes/empRoutes.js";
import seedRouter from "./routes/seedRoutes.js";

dotenv.config();

const app = express(); // Create Express app

app.use(express.json()); // Expect JSON data
// app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/seed", seedRouter);
app.use("/api/emp", empRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(`Connected to ${process.env.MONGODB_URI}`);
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });
