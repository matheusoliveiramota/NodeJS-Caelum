const app = require('./app');
const porta = 3000;

function retornoDeSubirOServidor(){
    console.log(`
         Servidor subiu na porta ${porta}
         Pressione CTRL + C para derrubar
         http://localhost:${porta}
    `);
}
app.listen(porta,retornoDeSubirOServidor);