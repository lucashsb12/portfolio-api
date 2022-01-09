const http = require('http');
const port = 3000
const server = http.createServer((req, res) =>{
    res.statusCode = 200; // sinaliza que a requisição foi feita com sucesso
    res.setHeader('Content-Type', 'text/html'); // seta o header para retornar html
    res.end("<h1>Ola mundo!</h1>")
});

server.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
});