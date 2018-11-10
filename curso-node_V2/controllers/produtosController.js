class ProdutosController {
    
    constructor(produtosDAO){
        this.produtosDAO = produtosDAO;
        // Especificar qual o 'this' que será utilizado no método
        this.novoProduto = this.novoProduto.bind(this);
        this.getProdutos = this.getProdutos.bind(this);
    }

    formNovoProduto(req,res) {
        res.render('produtos/form.ejs');
    }

    novoProduto(req,res) {
        const Joi = require('joi');
        const produtoSchema = Joi.object().keys({
            titulo: Joi.string().required(),
            preco: Joi.number().required(),
            descricao: Joi.string().required()
        });

        const produto = { // Data Transfer Object
            titulo: req.body.titulo,
            preco: req.body.preco,
            descricao: req.body.descricao
        }

        //Validando os Dados com a lib JOI
            const result = Joi.validate(produto,produtoSchema,{
                abortEarly: false
            });
            // Se tem, redireciona para a View e envie os Erros
            if(result.error){
                res.status(400)

                res.format({
                    html: () => {
                        res.render('produtos/form.ejs', {
                            errors: result.error.details
                        });
                    },
                    json: () => {
                        res.send(result.error);
                    }
                });

                return;
            }

        // Senão: (Não tem erro)
        this.produtosDAO.adicionar(produto)
            .then(() => {
                // Mexer no DAO
                res.redirect('/produtos')
            })
            .catch((erro) => {
                console.log(erro)
                response.send('Erro!')
            })
    }

    getProdutos(request,response) {  
        response.header('Access-Control-Allow-Origin','*'); 
        this.produtosDAO
            .PegaTodos()
            .then(function(results) {
                console.log('4 - "then" dentro do produto.js')
                const livros = results;
                response.format({
                    html: () => {
                        response.render('produtos/lista.ejs', 
                        {
                            livrosView: livros
                        })
                    },
                    json: () => {
                        response.send({
                            livros: livros
                        })
                    }
                });         
            })
            .catch(function(erro) {
                next(erro)
            });
        }

        getProdutosById(req,res){
            const id = req.params.id
            this.produtosDAO.PegaPorId(id, function(err,results){
                res.send(`
                    <tr>
                        <td>${results[0].titulo}</td>
                        <td>${results[0].preco}</td>
                        <td>${results[0].descricao}</td>
                    </tr>`
                );
            });
        }
}

module.exports = ProdutosController