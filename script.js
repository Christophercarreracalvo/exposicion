function alert() {
  const alert = document.getElementById("alerta");
  alert.classList.remove("d-none");
  setTimeout(() => alerta.classList.add("d-none"), 5000);
}
