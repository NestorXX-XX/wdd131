document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

let count = Number(localStorage.getItem("messages")) || 0;
document.querySelector("form").addEventListener("submit", () => {
  count++;
  localStorage.setItem("messages", count);
  document.querySelector("#messageCount").textContent = `You have sent ${count} messages.`;
});