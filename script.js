const form = document.getElementById("fuelForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const response = await fetch("https://script.google.com/macros/s/AKfycbxECFY_58mQIQqAlOSrRjTU6L6e8X9yy6I0h5CJJzHO_i9iiM7kaBw65eZIU-S5HQndew/exec", {
    method: "POST",
    body: data
  });

  msg.innerText = "Solicitud enviada correctamente";
  form.reset();
});
