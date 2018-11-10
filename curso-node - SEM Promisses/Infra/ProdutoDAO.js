class ProdutosDAO{

    constructor(connection) {
        this.connection = connection;
    }
    
    PegaTodos(callback) {
        this.connection.query('SELECT * FROM livros;',callback)
    }

    PegaPorId(id,callback) {
        this.connection.query(`SELECT * FROM livros WHERE id = ${id}`,callback)
    }
}

module.exports = ProdutosDAO;