document.addEventListener("DOMContentLoaded", () => {
  const randomText = document.getElementById("randomText");
  const newRandomText = document.getElementById("newRandomText");

  async function getText() {
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      randomText.textContent = `"${data.content}" — ${data.author}`;
    } catch (error) {
      randomText.textContent =
        "Não foi possível carregar a frase.";
    }
  }

  getText();

  newRandomText.addEventListener("click", getText);
});
