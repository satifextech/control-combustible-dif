const form = document.getElementById("fuelForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new URLSearchParams(new FormData(form));

  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbwnD8xnSrxUyW5jhNdmzQX4RRl9r0BvaT2NrRKqfJi-KN6BJkBm1b5Tn_9IUSgcAwyHEw/exec",
    {
      method: "POST",
      body: data
    }
  );

  msg.innerText = "Solicitud enviada correctamente";
  form.reset();
});
