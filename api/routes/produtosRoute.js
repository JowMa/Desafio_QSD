const { Router } = require('express');
const ProdutoController = require('../controllers/ProdutoController');

const router = Router();

router.get('/produtos', ProdutoController.retornaProdutos);
router.get('/produtos/busca', ProdutoController.buscaProduto);
// router.get('/produtos/:id',ProdutoController.retornaUmProduto);
router.post('/produtos', ProdutoController.cadastraProduto);
router.put('/produtos/:id', ProdutoController.atualizaProduto);

module.exports = router;