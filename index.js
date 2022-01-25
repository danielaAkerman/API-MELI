function mostrarResultados(results) {
  const contenedor = document.querySelector(".results");
  const template = document.querySelector("#result-item-template");
  contenedor.replaceChildren();

  for (const r of results) {
    const linkEl = template.content.querySelector(".result-link");
    linkEl.href = r.permalink;
    linkEl.style.textDecoration = "none";


    const titleEl = template.content.querySelector(".result-item-title");
    titleEl.textContent = r.title;

    const priceEl = template.content.querySelector(".result-item-price");
    priceEl.textContent = "$" + r.price;

    const imgEl = template.content.querySelector(".result-item-img");
    imgEl.src = r.thumbnail;

    const conditionEl = template.content.querySelector(
      ".result-item-condition"
    );
    conditionEl.textContent = r.condition;

    const sellEl = template.content.querySelector(
      ".result-item-sell-count-num"
    );
    sellEl.textContent = r.sold_quantity;

    const clone = document.importNode(template.content, true);

    contenedor.appendChild(clone);
  }
}

function getResultsCount(results) {
  const sellCountEl = document.querySelector(".result-item-sell-count-num");
  sellCountEl.content = results.total;
  console.log(results.total);
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
