import { GoogleGenAI } from "@google/genai";
import { configDotenv } from "dotenv";
import { Router } from "express";

configDotenv();

const router = Router();
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({
  apiKey: GEMINI_API_KEY,
  vertexai: false,
});

// 🎯 PrePrompt (system instruction)
const prePrompt = `
You are a movie suggestion AI.
Your only task is to return real, existing movie titles.
Rules:
- Answer must be a single line only.
- Use only comma-separated movie titles.
- Do not use numbering, bullet points, or new lines.
- Do not add explanations, release years, or extra text.
- Do not invent or create fake titles; only return real, verified movie titles.
- Do not repeat the same movie twice in a single response.
- The response must strictly contain only valid movie titles.
`;


router.post("/movie-suggestions", async (req, res) => {
  try {
    const { query } = req.body;

    const prompt = `${prePrompt}\nUser query: ${query}`;

    if (!GEMINI_API_KEY) {
      return res.status(500).json({
        error: "API key not configured. Please set GEMINI_API_KEY.",
      });
    }

    const result = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
      ],
    });

    // Extract safe text from response
    const text = result?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    res.status(200).send({ aiResponse: text });
  } catch (error) {
    console.error("Detailed error:", error);
    res.status(500).json({
      error: "Something went wrong!",
      message: error.message,
    });
  }
});

export default router;
