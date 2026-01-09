const form = document.getElementById("fuelForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new URLSearchParams(new FormData(form));

  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbzp4eB6mgvjjjy88Q7tINNFDqAONDTaY84c3NikxA0CTWp9ePX3zRaY6qe0QaRmO6tvsQ/exec",
    {
      method: "POST",
      body: data
    }
  );

  msg.innerText = "Solicitud enviada correctamente";
  form.reset();
});
