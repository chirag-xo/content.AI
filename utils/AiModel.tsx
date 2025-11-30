import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY;

if (!apiKey) {
  console.error("NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY is not set.");
}

const genAI = new GoogleGenerativeAI(apiKey || "");

const model = genAI.getGenerativeModel({
  // Use the stable Gemini model — not the old beta path
  model: "gemini-2.0-flash", // or "gemini-1.5-flash-latest"
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
};

// Chat session
export const chatSession = model.startChat({
  generationConfig,
  history: [],
});
