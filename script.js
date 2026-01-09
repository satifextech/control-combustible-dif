form.addEventListener("submit", async (e) => {
  e.preventDefault();
  msg.innerText = "Enviando...";

  try {
    const data = new FormData(form);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxsedAFYRKcgBcIEXfNs_1GJvHMX-IILFM97E6Q38V8wBxQAyZ5xzfUKuyRF8OkpYwtxA/exec",
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
