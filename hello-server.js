const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});

    if(request.url === '/') {
        response.write('<h1>Hello World!</h1>');
    } else if(request.url === '/bem-vindo') {
        response.write('<h1>Bem-vindo!</h1>');
    } else {
        response.write('<h1>Desculpe... Página não encontrada!</h1>');
    }
    response.end();
});

const msg = () => {
    console.log('Servidor rodando na porta 3000...');
};

server.listen(3000, msg);