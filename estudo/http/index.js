const http = require('http');
const port = 3000
const server = http.createServer((req, res) =>{
    res.statusCode = 200; // sinaliza que a requisição foi feita com sucesso

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.end(JSON.stringify({message: "Parabens! Voce se conectou ao servidor node!"}));
    console.log(req, res);
});

server.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
});