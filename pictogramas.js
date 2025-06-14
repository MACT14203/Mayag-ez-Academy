
const tarjetas = document.querySelectorAll('.tarjeta');

function obtenerVoz() {
  const voces = speechSynthesis.getVoices();
  return voces.find(v => v.lang === "es-ES" && v.name.includes("Google")) || voces[0];
}

speechSynthesis.onvoiceschanged = () => obtenerVoz();

tarjetas.forEach(t => {
  t.addEventListener("click", () => {
    const texto = t.dataset.texto;
    const utter = new SpeechSynthesisUtterance(texto);
    utter.lang = "es-ES";
    utter.rate = 0.9;
    utter.voice = obtenerVoz();
    speechSynthesis.speak(utter);
  });
});
