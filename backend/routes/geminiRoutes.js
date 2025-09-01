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
Rules:
- If the user asks for movie suggestions (any language, genre, or category including Indian, Hollywood, etc.) → return 10 real, verified movie titles.
- This includes adult-themed/R-rated movies from legitimate film industries (Bollywood, Hollywood, etc.).
- Only if the user asks for pornographic, xxx, explicit sexual content, or hardcore adult content → respond with "noMovies".
- Only if the user asks about completely non-movie topics → respond with "noMovies".
- Answer must be a single line only.
- Use only comma-separated movie titles.
- Do not use numbering, bullet points, or new lines.
- Do not add explanations, release years, or extra text.
- Do not invent or create fake titles; return only real, verified movie titles.
- Do not repeat the same movie twice in a single response.
- Only give 10 movies.
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
    let parsedError = JSON.parse(error.message);
    console.log("apiError: ", parsedError.error.message);

    // Detect if it's API limit exceeded
    const isLimitError =
      error.message.toLowerCase().includes("limit") ||
      error.message.toLowerCase().includes("exceeded");

    res.status(isLimitError ? 429 : 500).json({
      error: isLimitError ? "API Limit Exceeded" : "Something went wrong",
      message: isLimitError
        ? "Your request exceeds the API usage limit. Please try again later"
        : parsedError.error.message,
    });
  }
});

export default router;
