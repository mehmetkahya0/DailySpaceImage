const apiKey = "DEMO_KEY"; // Replace with your own API key
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

async function fetchApod() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Data received:", data); // Log the data received from the API
    displayApod(data);

    // Display rate limit information if available
    const rateLimitInfo = document.getElementById("rate-limit-info");
    const rateLimitRemaining = response.headers.get("X-RateLimit-Remaining");
    if (rateLimitInfo && rateLimitRemaining !== null) {
      rateLimitInfo.textContent = `Remaining API requests today: ${rateLimitRemaining}`;
    }
  } catch (error) {
    console.error("Error fetching the APOD:", error);

    // Show a default image or message if API request fails
    const apodImage = document.getElementById("apod-image");
    apodImage.src = "banner2.png";

    // Hide other content or display an error message
    const title = document.getElementById("title");
    title.textContent = "NASA APOD";

    const date = document.getElementById("date");
    date.textContent = "Date";

    const description = document.getElementById("description");
    description.textContent =
      "Failed to fetch data. Please try again later.";
  }
}

function displayApod(data) {
  const apodImage = document.getElementById("apod-image");
  const title = document.getElementById("title");
  const date = document.getElementById("date");
  const description = document.getElementById("description");

  apodImage.src = data.url;
  title.textContent = data.title;
  date.textContent = data.date;
  description.textContent = data.explanation;
}

// Fetch the APOD when the page loads
window.onload = fetchApod;