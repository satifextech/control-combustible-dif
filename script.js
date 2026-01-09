const form = document.getElementById("fuelForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new URLSearchParams(new FormData(form));

  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbwp452GL3wUIWuXPHaOnreP17eGyaK7sxcqgTFT1ClCwpRh_RVYrnzlGxx1wxmcQNX7hg/exec",
    {
      method: "POST",
      body: data
    }
  );

  msg.innerText = "Solicitud enviada correctamente";
  form.reset();
});


