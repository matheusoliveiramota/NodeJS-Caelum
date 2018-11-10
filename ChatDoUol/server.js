const express = require('express');
const app = express();

const http = require('http').Server(app) // Configurando o HTTP
const io = require('socket.io')(http) // Configurando o Web Socket
const porta = 3000;

io.on('connection', (socket) => {
    console.log('Usuário conectou!');
    
    socket.on('CLIENT_SENDMESSAGE', (dadoDoClient) => {
        console.log(dadoDoClient)
        io.emit('SERVER_SENDMESSAGE', `SERVIDOR: ${dadoDoClient}`)
    });

    socket.on('disconnect', () => {
        console.log('Usuario saiu :(')
    });
});

app.get('/', (request,response) => {
    response.render('home.ejs');
});

http.listen(porta, () => {
    console.log(`
        APP subiu na porta: ${porta}
        http://localhost::3000
    `);
});