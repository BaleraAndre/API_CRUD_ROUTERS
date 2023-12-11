const express = require('express');
const router = express.Router();
const pessoasDAO = require('./PessoasDAO');

//8
router.get('/pessoas', (req, res) => {
  res.json(pessoasDAO.getPessoas());
});

router.post('/pessoas', (req, res) => {
  pessoasDAO.adicionaPessoa(req, res);
  res.json(pessoasDAO.getPessoas());
});

router.put('/pessoas/:id', (req, res) => {
  pessoasDAO.atualizarPessoa(req, res);
  res.json(pessoasDAO.getPessoas());
});

router.delete('/pessoas/:id', (req, res) => {
  pessoasDAO.excluirPessoa(req, res);
  res.json(pessoasDAO.getPessoas());
});

module.exports = router;
