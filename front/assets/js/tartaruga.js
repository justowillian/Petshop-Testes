const main = document.querySelector('main');
let produtos = [];

// Função para adicionar ao carrinho
function adicionarAoCarrinho(id, nome, descricao, preco, imagem) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    const index = carrinho.findIndex((item) => item.id === id);
    if (index !== -1) {
        carrinho[index].quantidade += 1;
    } else {
        carrinho.push({ id, nome, descricao, preco, imagem, quantidade: 1 });
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    mostrarPainelLateral(nome, imagem);
}

// Função para mostrar o painel lateral
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

    // Remove o painel após 10 segundos
    setTimeout(() => {
        painel.classList.remove('ativo');
    }, 10000);
}

// Função para fechar o carrinho
function fecharCarrinho() {
    const painel = document.getElementById('carrinho-sidebar');
    painel.classList.remove('ativo');
}

// Carregar os produtos do JSON
fetch("assets/json/tartaruga.json")
    .then(response => response.json())
    .then(data => {
        produtos = data;
        exibirCards();
    })
    .catch(error => console.error("Erro ao carregar JSON:", error));

// Função para exibir os cards dos produtos
function exibirCards() {
    produtos.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.alt}">
            <h2>${produto.nome}</h2>
            <p>${produto.descricao}</p>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button class="add-to-cart-button">Adicionar ao Carrinho</button>
        `;

        const button = card.querySelector('.add-to-cart-button');
        button.addEventListener('click', () => {
            adicionarAoCarrinho(produto.id, produto.nome, produto.descricao, produto.preco, produto.imagem);
        });

        main.appendChild(card);
    });
}