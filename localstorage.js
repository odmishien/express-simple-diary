const textArea = document.querySelector("textarea");

textArea.addEventListener("input", saveValue);

function saveValue(e) {
  localStorage.setItem("memo", e.target.value);
}

function loadValue() {
  const memo = localStorage.getItem("memo");
  textArea.value = memo;
}

window.onload = loadValue;
