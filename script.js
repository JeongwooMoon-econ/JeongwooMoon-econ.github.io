function toggleAbstract(button) {
  const abstractDiv = button.closest('.paper-entry').querySelector('.abstract-text');
  if (abstractDiv.style.display === "none") {
    abstractDiv.style.display = "block";
    button.textContent = "[hide abstract]";
  } else {
    abstractDiv.style.display = "none";
    button.textContent = "[abstract]";
  }
}

