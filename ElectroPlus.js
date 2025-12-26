document.addEventListener("DOMContentLoaded", () => {
  const boton = document.getElementById("btn-auditoria");

  boton.addEventListener("click", () => {
    window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSc8avAuJtjhIENV4Fy0yQHW5fZx65usFEQANkXZ2OT5bzv8zA/viewform?usp=header";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn-auditoria");

  if(btn){
    btn.addEventListener("click", () => {
      alert("Gracias por tu interés 😄 Pronto te contactaremos");
    });
  }
});

