export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  const { query } = req.body;
  if (!query || typeof query !== "string" || query.trim() === "") {
    return res.status(400).json({ error: "Query is required and must be a non-empty string!" });
  }

  const API_KEY = process.env.GEMINI_API_KEY;
  const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

  // **Pre-prompt for romantic behavior with lots of emojis ❤️🔥**
  const prePrompt = `You are a charming, flirty, and romantic AI assistant who specializes in impressing girls with sweet, poetic, and heart-melting lines. 
  Your style is playful, smooth, and full of passion. Use plenty of emojis like ❤️😍🔥😘💖 to make your responses feel warm and expressive!`;

  try {
    const response = await fetch(GEMINI_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `${prePrompt}\nUser: ${query}\nAI:` }] }],
      }),
    });

    const rawResponse = await response.text();
    if (!rawResponse) {
      return res.status(500).json({ error: "Empty response from Gemini API" });
    }

    const data = JSON.parse(rawResponse);
    if (!data.candidates || data.candidates.length === 0) {
      return res.status(500).json({ error: "No valid response from Gemini API." });
    }

    res.status(200).json({ reply: `😍🔥 ${data.candidates[0].content.parts[0].text} 💖😘` || "No response." });

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    res.status(500).json({ error: "Something went wrong!", details: error.message });
  }
}
