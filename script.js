function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function montarCatalogo() {
  const container = document.getElementById("catalog");

  PRODUTOS.forEach((produto, index) => {
    const swiperId = `swiper-produto-${index}`;
    const temUmaFoto = produto.fotos.length === 1;

    const slides = produto.fotos
      .map(
        (foto) => `
        <div class="swiper-slide">
          <img src="${foto}" alt="${produto.nome}" loading="lazy">
        </div>`
      )
      .join("");

    const linkWhats = `https://wa.me/${produto.whatsapp}?text=${encodeURIComponent(produto.mensagem)}`;

    const card = document.createElement("article");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-swiper-wrap ${temUmaFoto ? "only-one-photo" : ""}">
        <div class="swiper" id="${swiperId}">
          <div class="swiper-wrapper">
            ${slides}
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
        <span class="slide-counter" data-counter>1/${produto.fotos.length}</span>
      </div>

      <div class="product-info">
        <span class="tag">${produto.tag}</span>
        <h2>${produto.nome}</h2>
        <p class="desc">${produto.descricao}</p>

        <div class="price-row">
          <div>
            <span class="price-label">Por apenas</span>
            <span class="price">${formatarPreco(produto.preco)}</span>
          </div>
        </div>

        <div class="cta-row">
          <a class="btn btn-primary" href="${linkWhats}" target="_blank" rel="noopener">
            Comprar no WhatsApp
          </a>
          <a class="btn btn-ghost" href="https://instagram.com/" target="_blank" rel="noopener">
            Ver no Instagram
          </a>
        </div>
      </div>
    `;

    container.appendChild(card);

    const counterEl = card.querySelector("[data-counter]");
    new Swiper(`#${swiperId}`, {
      loop: false,
      pagination: { el: `#${swiperId} .swiper-pagination`, clickable: true },
      navigation: {
        nextEl: `#${swiperId} .swiper-button-next`,
        prevEl: `#${swiperId} .swiper-button-prev`,
      },
      on: {
        slideChange(swiper) {
          counterEl.textContent = `${swiper.activeIndex + 1}/${produto.fotos.length}`;
        },
      },
    });
  });
}

montarCatalogo();
