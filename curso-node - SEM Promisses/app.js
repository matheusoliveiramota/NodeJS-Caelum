// Utilizando a biblioteca 'EXPRESS' para facilitar as ROTAS

    const express = require('express');
    const app = express();
    
    // APP.MÉTODO_REQUEST: QUAL URL - QUAL RESPONSE
    
    // HOME
        // const rotaDaHome = require('./routes/home');
        // console.log('O que tem nesse require: ',rotaDaHome);
        // rotaDaHome(app);

    // MIDLEWARE: Arquivos estáticos devem ser Renderizados antes. Ex: CSS, HTML
    app.use(express.static('./public'));
    
    // HOME E PRODUTOS
    require('./routes/home')(app)
    require('./routes/produto')(app)

// MÓDULOS: TODOS ARTEFATOS SÃO TRATADOS COMO MÓDULOS PARA O JS
module.exports = app