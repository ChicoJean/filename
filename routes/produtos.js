const express = require('express');
const router = express.Router();
const Produto = require('../models/produto');

// GET - Todos os produtos
router.get('/', async (req, res) => {
  const produtos = await Produto.find();
  res.json(produtos);
});

// POST - Novo produto
router.post('/', async (req, res) => {
  const novoProduto = new Produto(req.body);
  await novoProduto.save();
  res.status(201).json(novoProduto);
});

// PUT - Atualizar produto
router.put('/:id', async (req, res) => {
  const produtoAtualizado = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(produtoAtualizado);
});

// DELETE - Remover produto
router.delete('/:id', async (req, res) => {
  await Produto.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;
