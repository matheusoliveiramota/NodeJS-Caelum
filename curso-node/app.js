// Utilizando a biblioteca 'EXPRESS' para facilitar as ROTAS

    const express = require('express');
    const app = express();

    const bodyParser = require('body-parser');

    const consign = require('consign')
    // APP.MÉTODO_REQUEST: QUAL URL - QUAL RESPONSE
    
    // HOME
        // const rotaDaHome = require('./routes/home');
        // console.log('O que tem nesse require: ',rotaDaHome);
        // rotaDaHome(app);

    // MIDLLEWARE: Arquivos estáticos devem ser Renderizados antes. Ex: CSS, HTML
        app.use(express.static('./public'));
     
        // PRE FLIGHT: Processo de enviar um OPTIONS antes do POST, DELETE, GET - Verificar se posso enviar os pacotes
        const cors = require('cors');
        app.use(cors())


    //BODY PARSER
        // parse application/x-www-form-urlencoded
        app.use(bodyParser.urlencoded({ extended: false }))
        // Converter response para JSON
        app.use(bodyParser.json())

    // HOME E PRODUTOS
        //require('./routes/home')(app)
        //require('./routes/produto')(app)
    // LAB: consign - Sem precisar definir as rotas
    consign()
        .include('./routes')
        .into(app)

    // CASO NÃO ENCONTRE NENHUMA ROTA = 404
    app.use((req,res) => {
        res.status(404)
        res.send('Página não encontrada !')
    })

    // PAGE: NÃO SEI QUE ERRO DEU, FERROU = 'next'
    app.use((err,req,res,next) => {
        res.status(500);
        res.render('server/baleia.ejs');
    });

// MÓDULOS: TODOS ARTEFATOS SÃO TRATADOS COMO MÓDULOS PARA O JS
module.exports = app