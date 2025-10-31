// Display current year dynamically
const yearSpan = document.querySelector("#currentyear");
const today = new Date();
yearSpan.textContent = today.getFullYear();

// Display last modified date
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;