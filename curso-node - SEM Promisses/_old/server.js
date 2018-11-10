const http = require('http');
const porta = 3001;

function lidaComRequest(request,response)
 {
    var req = [];
        req['/'] = '<h1>HOME</h1>';
        req['/produtos'] = '<h1>Listagem de Livros</h1>';

    if(req[request.url] !== undefined)
    {
        response.writeHead(200);
        response.end(req[request.url]);
    }

    //SE NÃO FOI ENVIADO NENHUM 'response.end', TRATE O RESPONSE COMO 'NOT FOUND'
    response.writeHead(404);
    response.end('Recurso não encontrado.');
    
    console.log("Sou executado, porém o 'response.end' é unico. " +
                "UMA REQUISIÇÃO = UMA RESPOSTA (RESPONSE.END)");

 }
function retornoDeSubirOServidor(){
    console.log(
        `Servidor subiu na porta ${porta}
        Pressione CTRL + C para derrubar
        http://localhost:${porta}
    `);
}

var server = http.createServer(lidaComRequest);
    server.listen(porta,retornoDeSubirOServidor);
