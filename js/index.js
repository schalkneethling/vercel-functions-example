const formElem = document.getElementById("doggo");

formElem.addEventListener("submit", async (event) => {
  const form = new FormData(formElem);
  const params = new URLSearchParams(form).toString();

  event.preventDefault();

  const response = await fetch(`/api/handler?${params}`);
  const { json } = await response.json();

  const container = document.getElementById("doggo-container");
  const imgElem = document.getElementById("doggo-img");

  if (imgElem) {
    imgElem.src = json.message;
    return;
  }

  const img = document.createElement("img");
  img.id = "doggo-img";
  img.src = json.message;
  img.width = 400;

  container.appendChild(img);
});
