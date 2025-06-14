
const vozSelect = document.getElementById("voz");
const idiomaSelect = document.getElementById("idioma");
const velocidadInput = document.getElementById("velocidad");
const volumenInput = document.getElementById("volumen");

function toggleDarkMode() {
  document.body.classList.toggle("modo-noche");
}

function toggleContrast() {
  document.body.classList.toggle("contraste-alto");
}

function cargarVoces() {
  const voces = speechSynthesis.getVoices();
  vozSelect.innerHTML = "";
  voces.forEach((v, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `${v.name} (${v.lang})`;
    vozSelect.appendChild(option);
  });
}

function guardarConfiguracion() {
  const config = {
    volumen: volumenInput.value,
    velocidad: velocidadInput.value,
    vozIndex: vozSelect.value,
    idioma: idiomaSelect.value
  };
  localStorage.setItem("configuracionComunicador", JSON.stringify(config));
  alert("Configuración guardada.");
}

speechSynthesis.onvoiceschanged = cargarVoces;
cargarVoces();
