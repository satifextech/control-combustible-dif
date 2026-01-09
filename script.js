const form = document.getElementById("fuelForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const response = await fetch("https://script.google.com/macros/s/AKfycbz_uLnijWvBPxxtULEARPythsAbcbvbvwI1MiemyYB2dlC_zoAD2PcbNJ8M4DK6HLwh1g/exec", {
    method: "POST",
    body: data
  });

  msg.innerText = "Solicitud enviada correctamente";
  form.reset();
});
