const connectionFunc = require('../Infra/connectionFactory');
const connection = connectionFunc()      

const ProdutosDAO = require('../Infra/ProdutoDAO')
const produtosDAO = new ProdutosDAO(connection)

module.exports = function(app){

    const ProdutosController = require('../controllers/produtosController')
    const produtosController = new ProdutosController(produtosDAO)

    console.log(produtosController.getProdutos)

    app.get('/produtos/form', produtosController.formNovoProduto);

    app.post('/produtos', produtosController.novoProduto);

    app.get('/produtos', produtosController.getProdutos);

    app.get('/produtos/:id', produtosController.getProdutosById);
};