function mostrarResultados(results) {
  const contenedor = document.querySelector(".results");
  const template = document.querySelector("#result-item-template");

  for (const r of results) {
    const titleEl = template.content.querySelector(".result-item-title");
    titleEl.textContent = r.title;

    const priceEl = template.content.querySelector(".result-item-price");
    priceEl.textContent = r.price;

    const conditionEl = template.content.querySelector(
      ".result-item-condition"
    );
    conditionEl.textContent = "Condi";

    const clone = document.importNode(template.content, true);
    contenedor.appendChild(clone);
  }
}

function main() {
  const formEl = document.querySelector(".search-form");
  formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const palabraABuscar = e.target.buscar.value;
    fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + palabraABuscar)
      .then((response) => response.json())
      .then((data) => mostrarResultados(data.results));
  });
}

main();
