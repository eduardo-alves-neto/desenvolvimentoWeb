document
  .getElementById("consultar-btn")
  .addEventListener("click", consultarCEP);

function consultarCEP() {
  const cep = document.getElementById("cep").value.replace(/\D/g, "");
  const erroElem = document.getElementById("erro");
  const resultadoElem = document.getElementById("resultado");

  erroElem.textContent = "";
  resultadoElem.innerHTML = "";

  if (cep.length !== 8) {
    erroElem.textContent = "CEP inválido. Digite 8 números.";
    return;
  }

  document.getElementById("consultar-btn").disabled = true;

  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((data) => {
      if (data.erro) {
        erroElem.textContent = "CEP não encontrado.";
      } else {
        resultadoElem.innerHTML = `
          <p><strong>Logradouro:</strong> ${data.logradouro}</p>
          <p><strong>Bairro:</strong> ${data.bairro}</p>
          <p><strong>Cidade:</strong> ${data.localidade}</p>
          <p><strong>Estado:</strong> ${data.uf}</p>
        `;
      }
    })
    .catch(() => {
      erroElem.textContent = "Erro ao consultar o CEP. Tente novamente.";
    })
    .finally(() => {
      document.getElementById("consultar-btn").disabled = false;
    });
}
