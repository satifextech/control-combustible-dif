const form = document.getElementById("fuelForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new URLSearchParams(new FormData(form));

  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbwgtYqYGBrv_XKGEkszfyQlADScnJt2d6Z6dxVh7y5YZnldX2UGPwpfBXs0xVW3EJDE/exec",
    {
      method: "POST",
      body: data
    }
  );

  msg.innerText = "Solicitud enviada correctamente";
  form.reset();
});
