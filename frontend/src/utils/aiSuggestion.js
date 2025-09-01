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
    responseData = JSON.parse(responseText);

    // console.log("responseData: ", responseData);

    if (!response.ok) {
      const ApiError = new Error(
        `API Error: ${response.status} ${response.statusText}`
      );
      ApiError.status = response.status;
      ApiError.statusText = response.statusText;
      ApiError.response = responseData; // This contains your backend error objec

      throw ApiError;
    }

    return responseData;
  } catch (error) {
    console.error("API call failed:", error);

    throw {
      error: true,
      message: "Something went wrong",
      status: error.status || 500,
    };
  }
};

export default aiSuggestions;
