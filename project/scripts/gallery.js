const landmarks = [
  { name: "Alhambra", region: "south", img: "images/alhambra.jpg", desc: "A palace and fortress in Granada, Andalusia." },
  { name: "Sagrada Familia", region: "north", img: "images/sagrada.jpg", desc: "An iconic basilica in Barcelona by Antoni Gaudí." },
  { name: "Mezquita of Córdoba", region: "south", img: "images/mezquita.jpg", desc: "A former mosque and now cathedral, rich in Islamic art." },
  { name: "Park Güell", region: "north", img: "images/parkguell.jpg", desc: "A colorful park in Barcelona designed by Gaudí." },
  { name: "Aqueduct of Segovia", region: "central", img: "images/segovia.jpg", desc: "An ancient Roman aqueduct still standing strong." },
  { name: "Alcázar of Segovia", region: "central", img: "images/alcazar.jpg", desc: "A castle-palace that inspired Disney’s fairytale design." }
];

const gallery = document.querySelector("#gallery");

function displayLandmarks(filtered) {
  gallery.innerHTML = "";
  filtered.forEach(l => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${l.img}" alt="${l.name}" loading="lazy">
      <h3>${l.name}</h3>
      <p>${l.desc}</p>`;
    gallery.appendChild(card);
  });
}

displayLandmarks(landmarks);

document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    const region = btn.dataset.region;
    const filtered = region === "all" ? landmarks : landmarks.filter(l => l.region === region);
    displayLandmarks(filtered);
  });
});

document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;