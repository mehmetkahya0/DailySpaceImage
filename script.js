const apiKey = "DEMO_KEY"; // Replace 'DEMO_KEY' with your actual NASA API key
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

async function fetchApod() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    displayApod(data);
  } catch (error) {
    console.error("Error fetching the APOD:", error);
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
