const form = document.getElementById("fuelForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new URLSearchParams(new FormData(form));

  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbyS4s4DGcl5W5am6u6elMcbBNHIpxuEc_EC0LnK_1W6UolmH_G7l2X-s7HeCsp4ocxYOw/exec",
    {
      method: "POST",
      body: data
    }
  );

  msg.innerText = "Solicitud enviada correctamente";
  form.reset();
});
