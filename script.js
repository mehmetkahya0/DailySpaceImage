const apiKey = "DEMO"; // Replace with your own API key
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

async function fetchApod() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    displayApod(data);
  } catch (error) {
    console.error("Error fetching the APOD:", error);
    displayFallbackImage();
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

function displayFallbackImage() {
  const apodImage = document.getElementById("apod-image");
  const title = document.getElementById("title");
  const date = document.getElementById("date");
  const description = document.getElementById("description");

  apodImage.src = "banner.png"; // Display the fallback image
  title.textContent = "Image Unavailable";
  date.textContent = "";
  description.textContent =
    "Unable to fetch the Astronomy Picture of the Day. Please try again later.";
}

// Fetch the APOD when the page loads
window.onload = fetchApod;
