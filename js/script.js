/*
  CONFIGURAÇÃO RÁPIDA
  ====================
  Troque o número abaixo pelo WhatsApp de verdade (com código do país e DDD,
  só números). Exemplo: "5581999999999" para +55 81 99999-9999.
*/
const WHATSAPP_NUMERO = "5581983133492";

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function linkWhatsapp(mensagem) {
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
}

/*
  Aceita tanto "images: [...]" (várias fotos) quanto o antigo "image: '...'"
  (uma foto só), pra não quebrar produtos já cadastrados de um jeito ou de
  outro. Sempre devolve uma lista.
*/
function getImagens(produto) {
  if (Array.isArray(produto.images) && produto.images.length > 0) {
    return produto.images;
  }
  if (produto.image) {
    return [produto.image];
  }
  return ["placeholder.svg"];
}

function criarCardProduto(produto) {
  const imagens = getImagens(produto);
  const card = document.createElement("article");
  card.className = "produto-card";
  card.dataset.categoria = produto.category;

  const mensagem = `Olá! Tenho interesse na peça "${produto.name}" (${formatarPreco(produto.price)}).`;
  const contagemHtml = imagens.length > 1
    ? `<span class="produto-foto-contagem">1/${imagens.length}</span>`
    : "";

  card.innerHTML = `
    <button type="button" class="produto-foto-botao" aria-label="Ver fotos de ${produto.name}">
      <img class="produto-foto" src="images/${imagens[0]}" alt="${produto.name}"
           onerror="this.onerror=null;this.src='images/placeholder.svg';">
      ${contagemHtml}
    </button>
    <div class="produto-corpo">
      <h3 class="produto-nome">${produto.name}</h3>
      <p class="produto-desc">${produto.description}</p>
      <div class="produto-rodape">
        <span class="produto-preco">${formatarPreco(produto.price)}</span>
        <a class="produto-comprar" href="${linkWhatsapp(mensagem)}" target="_blank" rel="noopener">Encomendar</a>
      </div>
    </div>
  `;

  card.querySelector(".produto-foto-botao").addEventListener("click", () => {
    abrirGaleria(produto.name, imagens);
  });

  return card;
}

function renderizarGrid(elementoId, produtos) {
  const grid = document.getElementById(elementoId);
  grid.innerHTML = "";
  produtos.forEach(p => grid.appendChild(criarCardProduto(p)));
}

/* ================= GALERIA DE FOTOS (modal com setas) ================= */
let galeriaImagens = [];
let galeriaIndice = 0;

const fotoModal = document.getElementById("foto-modal");
const fotoModalImg = document.getElementById("foto-modal-img");
const fotoModalNome = document.getElementById("foto-modal-nome");
const fotoModalContador = document.getElementById("foto-modal-contador");
const fotoAnteriorBtn = document.getElementById("foto-anterior");
const fotoProximaBtn = document.getElementById("foto-proxima");
const fotoModalFechar = document.getElementById("foto-modal-fechar");

function abrirGaleria(nomeProduto, imagens) {
  galeriaImagens = imagens;
  galeriaIndice = 0;
  fotoModalNome.textContent = nomeProduto;
  atualizarFotoGaleria();
  fotoModal.hidden = false;
}

function fecharGaleria() {
  fotoModal.hidden = true;
}

function atualizarFotoGaleria() {
  const arquivo = galeriaImagens[galeriaIndice];
  fotoModalImg.src = `images/${arquivo}`;
  fotoModalImg.onerror = () => { fotoModalImg.onerror = null; fotoModalImg.src = "images/placeholder.svg"; };
  fotoModalImg.alt = fotoModalNome.textContent;

  const temVarias = galeriaImagens.length > 1;
  fotoAnteriorBtn.hidden = !temVarias;
  fotoProximaBtn.hidden = !temVarias;
  fotoModalContador.textContent = temVarias
    ? `Foto ${galeriaIndice + 1} de ${galeriaImagens.length}`
    : "";
}

fotoAnteriorBtn.addEventListener("click", () => {
  galeriaIndice = (galeriaIndice - 1 + galeriaImagens.length) % galeriaImagens.length;
  atualizarFotoGaleria();
});
fotoProximaBtn.addEventListener("click", () => {
  galeriaIndice = (galeriaIndice + 1) % galeriaImagens.length;
  atualizarFotoGaleria();
});
fotoModalFechar.addEventListener("click", fecharGaleria);
fotoModal.addEventListener("click", (e) => {
  if (e.target === fotoModal) fecharGaleria();
});
document.addEventListener("keydown", (e) => {
  if (fotoModal.hidden) return;
  if (e.key === "Escape") fecharGaleria();
  if (e.key === "ArrowLeft") fotoAnteriorBtn.click();
  if (e.key === "ArrowRight") fotoProximaBtn.click();
});

/* ================= INICIALIZAÇÃO ================= */
function iniciar() {
  renderizarGrid("produtos-grid", PRODUCTS);

  const destaques = PRODUCTS.filter(p => p.featured);
  if (destaques.length > 0) {
    renderizarGrid("destaques-grid", destaques);
  } else {
    document.getElementById("destaques").style.display = "none";
  }

  const botoes = document.querySelectorAll(".filtro");
  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      botoes.forEach(b => b.classList.remove("ativo"));
      botao.classList.add("ativo");
      const categoria = botao.dataset.cat;
      const filtrados = categoria === "todos"
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === categoria);
      renderizarGrid("produtos-grid", filtrados);
    });
  });

  const ctaGeral = document.getElementById("whatsapp-cta");
  ctaGeral.href = linkWhatsapp("Olá! Vi o site e gostaria de fazer uma encomenda.");

  document.getElementById("ano").textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", iniciar);
