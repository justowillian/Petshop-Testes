function formatarPreco(valor) {
    return ` ${valor.toFixed(2).replace('.', ',')}`;
  }
  
  function renderCarrinho() {
    const tbody = document.getElementById('corpo-tabela');
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let total = 0;
  
    carrinho.forEach(produto => {
        const tr = document.createElement('tr');
        const subtotal = produto.preco * produto.quantidade;
        total += subtotal;
  
        tr.innerHTML = `
            <td>${produto.id}</td>
            <td>${produto.nome}</td>
            <td>${produto.descricao}</td>
            <td><img src="${produto.imagem}" alt="${produto.nome}" width="60"></td>
            <td>
                <button onclick="alterarQuantidade(${produto.id}, -1)">-</button>
                ${produto.quantidade}
                <button onclick="alterarQuantidade(${produto.id}, 1)">+</button>
            </td>
            <td>${formatarPreco(subtotal)}</td>
        `;
  
        tbody.appendChild(tr);
    });
  
    document.getElementById("total-geral").textContent = `Total R$ ${formatarPreco(total)}`;
  }
  
  function alterarQuantidade(id, delta) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  
    const produto = carrinho.find(p => p.id === id);
    if (!produto) return;
  
    produto.quantidade += delta;

    if (produto.quantidade > 20) {
        alert("Limite máximo de 20 unidades por produto atingido.");
        produto.quantidade = 20; // Garante que não ultrapasse 20
    }

    if (produto.quantidade < 1) {
        alert("Nenhum produto no carrinho. Removendo o item.");
        carrinho = carrinho.filter(p => p.id !== id); // Remove o produto do carrinho
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    location.reload();
  }
  
 function enviarPedido() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

  fetch('https://petshop-api-i52w.onrender.com/pedidos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ itens: carrinho })
  })
  .then(res => {
    if (!res.ok) throw new Error('Erro ao enviar o pedido');
    return res.json();
  })
  .then(data => {
    alert('Pedido enviado com sucesso!');
    localStorage.removeItem('carrinho');
    location.reload();
  })
  .catch(error => {
    alert('Erro ao enviar pedido: ' + error.message);
  });
}

  
  window.onload = function() {
    renderCarrinho();
  };