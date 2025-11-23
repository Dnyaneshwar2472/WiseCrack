export async function getQuote(topic = "life") {
  try {
    // API DOES NOT support topics, so we just fetch random advice
    const res = await fetch("https://api.adviceslip.com/advice?" + Math.random());

    const data = await res.json();

    return data.slip.advice; // return advice text
  } catch (error) {
    console.error("Error fetching advice:", error);

    return "Oops! Could not fetch advice. Try again!";
  }
}
