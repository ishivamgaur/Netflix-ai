import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import geminiRoutes from "./routes/geminiRoutes.js";

// Initialize environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000 || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// gemini-Routes
app.use("/api/gemini", geminiRoutes);

// Health-check
app.get("/api/gemini/health-check", (req, res) => {
  res.status(200).json({
    message: "haa..bhai Gemini-Api work kr rha hai",
  });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("Something went wrong: ", err.message);
    return err.message;
  }
  console.log(`Server is running at PORT: ${PORT}`);
});
