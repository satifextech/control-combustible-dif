form.addEventListener("submit", async (e) => {
  e.preventDefault();
  msg.innerText = "Enviando...";

  try {
    const data = new FormData(form);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbx7c1-VTjhM_uIipAjT0H0OS6K7TOs9vL2eXgq6KQIXMBVPOh1_MDcS5VtSFbX74tWk/exec",
      {
        method: "POST",
        body: data
      }
    );

    const text = await response.text();
    msg.innerText = text;
    form.reset();

  } catch (err) {
    msg.innerText = "Error al enviar";
    console.error(err);
  }
});
