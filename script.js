const form = document.getElementById("fuelForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const response = await fetch("https://script.google.com/macros/s/AKfycbx-rD-EN3-cM7QCxr2nGvflYS8KIUqhFSOq5fRB5d2UYDHQjsexMg94yAisesbetxOVtQ/exec", {
    method: "POST",
    body: data
  });

  msg.innerText = "Solicitud enviada correctamente";
  form.reset();
});
