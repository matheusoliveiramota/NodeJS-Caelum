const mysqlLib = require('mysql');

   function connectionFactory(){
        const connection = mysqlLib.createConnection({
                        host: 'localhost',
                        user: 'root',
                        password: 'caelum',
                        database: 'casadocodego'
        });

        return connection;
    }

    module.exports = connectionFactory;
        
    