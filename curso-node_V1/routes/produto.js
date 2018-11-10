module.exports = function(app){
    app.get('/produtos',function(request,response) {

        const connectionFunc = require('../Infra/connectionFactory');
        const connection = connectionFunc()
        
        const ProdutosDAO = require('../Infra/ProdutoDAO')
        const produtosDAO = new ProdutosDAO(connection)
        
        produtosDAO.PegaTodos(function(err,results){
            const livros = results;
            response.render('produtos/lista.ejs', 
            {
                livrosView: livros
            });
        });
        // EX: Má prática - Renderizar na resposta: Na Controller
            // response.send(`
            //     <h1>Lista de Livros</h1>
            //     <ol>
            //         ${livros.map(function(itemAtual){
            //             return `<li> ${itemAtual} </li>`
            //         }).join(' ')}
            //     </ol>
            // `); // TEMPLATE STRING: CRASES
    });

    app.get('/produtos/:id', function(req,res){
        const id = req.params.id
        
        const connectionFunc = require('../Infra/connectionFactory');
        const connection = connectionFunc()

        const ProdutosDAO = require('../Infra/ProdutoDAO');
        const produtosDAO = new ProdutosDAO(connection);

        produtosDAO.PegaPorId(id, function(err,results){
            res.send(`
                <tr>
                    <td>${results[0].titulo}</td>
                    <td>${results[0].preco}</td>
                    <td>${results[0].descricao}</td>
                </tr>`
            );
        });
    });
};