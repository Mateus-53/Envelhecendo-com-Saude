const range = document.getElementById("font-size-range");
const navText = document.querySelectorAll(".navText");
const pText = document.querySelectorAll(".pText");
const h1Text = document.querySelector(".text-primary");
const h2Text = document.querySelectorAll(".h2Text");
const h4Text = document.querySelector(".h4Text");
const footerText = document.querySelectorAll(".footerText");

const saveFontSize = (fontSize) => {
  localStorage.setItem("fontSize", fontSize);
}

const getFontSize = () => {
  const savedFontSize = localStorage.getItem("fontSize");
  return savedFontSize ? parseInt(savedFontSize) : 18;
}

range.value = getFontSize;

applyFontSize(getFontSize());

range.addEventListener("input", () => {
  const fontSize = parseInt(range.value);
  applyFontSize(fontSize);
  saveFontSize(fontSize);
})
  
function applyFontSize(fontSize) {
  navText.forEach(element => {
    element.style.fontSize = `${fontSize}px`;
  });
  
  pText.forEach(element => {
    element.style.fontSize = `${fontSize}px`;
  });
  
  h1Text.style.fontSize = `${fontSize + 16}px`;
  
  h2Text.forEach(element => {
    element.style.fontSize = `${fontSize + 8}px`;
  });
  
  h4Text.style.fontSize = `${fontSize + 4}px`;
  
  footerText.forEach(element => {
    element.style.fontSize = `${fontSize - 7}px`;
  });
}