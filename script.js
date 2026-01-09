const form = document.getElementById("fuelForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const response = await fetch("URL_DEL_APPS_SCRIPT", {
    method: "POST",
    body: data
  });

  msg.innerText = "Solicitud enviada correctamente";
  form.reset();
});
