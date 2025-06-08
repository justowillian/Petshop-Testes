const API_URL = "https://petshop-api.onrender.com"; // coloque sua URL real

async function listarProdutos() {
  try {
    const resposta = await fetch(`${API_URL}/produtos`);
    const produtos = await resposta.json();

    const lista = document.getElementById("lista-produtos");
    lista.innerHTML = ""; // limpar lista antes de preencher

    produtos.forEach(produto => {
      const item = document.createElement("li");
      item.innerHTML = `
        <strong>${produto.nome}</strong> - R$ ${produto.preco}
        <button onclick="adicionarAoCarrinho('${produto.id}', '${produto.nome}', '${produto.descricao}', ${produto.preco}, '${produto.imagem}')">Comprar</button>
      `;
      lista.appendChild(item);
    });
  } catch (erro) {
    console.error("Erro ao buscar produtos:", erro);
  }
}

document.addEventListener("DOMContentLoaded", listarProdutos);

function adicionarAoCarrinho(id, nome, descricao, preco, imagem) {
      let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

      const index = carrinho.findIndex((item) => item.id === id);
      if (index !== -1) {
        carrinho[index].quantidade += 1;
      } else {
        carrinho.push({ id, nome, descricao, preco, imagem, quantidade: 1 });
      }

      localStorage.setItem("carrinho", JSON.stringify(carrinho));
      alert("Produto adicionado ao carrinho!");
    }

function mostrarPainelLateral(nomeProduto, imagemProduto) {
    const painel = document.getElementById('carrinho-sidebar');
    const textoProduto = document.getElementById('produto-adicionado');
    const imagemElemento = document.createElement('img');

    // Atualiza o texto do produto
    textoProduto.textContent = nomeProduto;

    // Remove qualquer imagem anterior
    const imagemExistente = painel.querySelector('.imagem-produto-adicionado');
    if (imagemExistente) {
        imagemExistente.remove();
    }

    // Adiciona a nova imagem
    imagemElemento.src = imagemProduto;
    imagemElemento.alt = nomeProduto;
    imagemElemento.classList.add('imagem-produto-adicionado');
    textoProduto.insertAdjacentElement('beforebegin', imagemElemento);

    // Mostra o painel
    painel.classList.add('ativo');

    // Remove o painel após 1 segundo
    setTimeout(() => {
        painel.classList.remove('desativo');
    }, 1000);
}

function fecharCarrinho() {
    const painel = document.getElementById('carrinho-sidebar');
    painel.classList.remove('ativo');
}

// Atualiza os botões para passar a imagem do produto
const botoesComprar = document.querySelectorAll('button[onclick^="adicionarAoCarrinho"]');
botoesComprar.forEach(botao => {
    const onclickCode = botao.getAttribute('onclick');
    const params = onclickCode.match(/\((.*?)\)/)[1].split(',').map(param => param.trim());
    const nomeProduto = params[1].replace(/^'|'$/g, '');
    const imagemProduto = params[4].replace(/^'|'$/g, '');

    botao.addEventListener('click', () => {
        mostrarPainelLateral(nomeProduto, imagemProduto);
    });
});
const menuToggle = document.getElementById('menu-toggle');
const slideMenu = document.getElementById('slide-menu');

menuToggle.addEventListener('click', () => {
    slideMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
})