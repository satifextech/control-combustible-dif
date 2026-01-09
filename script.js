form.addEventListener("submit", async (e) => {
  e.preventDefault();
  msg.innerText = "Enviando...";

  try {
    const data = new FormData(form);

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxlwrOyNw7ZGStHDecGAWPdE25XmGC5bM9cwDw9iC6pVXfoiXwhDoIUJ-A8EDru7OxybQ/exec",
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
