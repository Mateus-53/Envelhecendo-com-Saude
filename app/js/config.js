const configZone = document.querySelector(".config-zone");
const configBTN = document.querySelector(".config-btn");
const closeConfigBTN = document.querySelector(".close-config");

const openConfig = () => {
  configZone.classList.remove("config-closed");
}

const closeConfig = () => {
  configZone.classList.add("config-closed");
}

configBTN.addEventListener("click", openConfig);
closeConfigBTN.addEventListener("click", closeConfig);
