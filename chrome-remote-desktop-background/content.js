let attempts = 0;
const maxAttempts = 30;

const checkElement = setInterval(() => {
  const targetDiv = document.querySelector(".YtOxne");
  console.log("searching...");

  if (targetDiv) {
    console.log("Element found:", targetDiv);
    targetDiv.style.backgroundColor = "black";
    clearInterval(checkElement); // Stop checking once found
  }

  attempts++;
  if (attempts >= maxAttempts) {
    console.log("Element not found within 30 seconds. Stopping search.");
    clearInterval(checkElement);
  }
}, 1000);

console.log("all i know is pain, all i know is pain, all i know is pain");
