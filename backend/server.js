import express from "express";
import cors from "cors";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";
import geminiRoutes from "./routes/geminiRoutes.js";

// Initialize environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/gemini", geminiRoutes);

app.listen(PORT, (err) => {
  if (err) {
    console.log("Something went wrong: ", err.message);
    return err.message;
  }
  console.log(`Server is running at PORT: ${PORT}`);
});
