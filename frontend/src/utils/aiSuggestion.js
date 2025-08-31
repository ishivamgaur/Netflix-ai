import { AI_SUGGESTION_API_URL } from "./constants";

export const aiSuggestions = async (query = "suggest retro indian movies") => {
  try {
    const response = await fetch(AI_SUGGESTION_API_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: query }),
    });

    // Read response text first (important!)
    const responseText = await response.text();
    let responseData;

    try {
      responseData = JSON.parse(responseText);
    } catch (e) {
      responseData = responseText;
    }

    if (!response.ok) {
      // Create enhanced error with backend response details
      const error = new Error(
        `API Error: ${response.status} ${response.statusText}`
      );
      error.status = response.status;
      error.statusText = response.statusText;
      error.response = responseData; // This contains your backend error objec

      throw error;
    }
    
    return responseData;
  } catch (error) {
    console.error("Request failed:", error);

    // Check if it's our enhanced error or a network error
    if (error.response) {
      console.error("Backend sent this error:", error.response);
    }

    throw error;
  }
};

export default aiSuggestions;
