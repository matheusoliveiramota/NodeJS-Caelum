class ProdutosDAO{

    constructor(connection) {
        this.connection = connection;
    }
    
    adicionar(produto) {
        return new Promise((resolve, reject) => {
            this.connection.query(`INSERT INTO livros SET ?`, produto, (err,result) => {
                if(err) reject(err)

                resolve(result)
            })
        })
    }

    PegaTodos() {
        console.log('1 - PegaTodos()');
        //const connection = this.connection; : Utilizar ARROW FUNCTION
        // '=>' Arrow Function: Preservar o THIS de origem; NÃO variar de acordo com o Contexto
        //      - Substitui o 'function'
        // Promise: 
        return new Promise((resolve,reject) => {
            console.log('2 - Dentro do new Promise')
            this.connection.query('SELECT * FROM livros;', function(err,result) {
                if(err) {
                    reject(err)
                }         
                console.log('3 - Dentro do Callback do Banco');
                resolve(result);
            });
        });

        //this.connection.query('SELECT * FROM livros;',callback)
    }

    PegaPorId(id,callback) {
        this.connection.query(`SELECT * FROM livros WHERE id = ${id}`,callback)
    }
}

module.exports = ProdutosDAO;