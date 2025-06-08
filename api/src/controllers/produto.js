const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.create = async (req, res) => {
  const { nome, descricao, preco, imagem, alt } = req.body;

  try {
    const novoProduto = await prisma.produto.create({
      data: {
        nome,
        descricao,
        preco: parseFloat(preco),
        imagem,
        alt
      }
    });
    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao cadastrar produto.', detalhes: error.message });
  }
};

exports.listar = async (req, res) => {
  try {
    const produtos = await prisma.produto.findMany();
    res.status(200).json(produtos);
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar produtos.' });
  }
};
