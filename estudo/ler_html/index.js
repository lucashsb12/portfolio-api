const http = require('http');
const fs = require('fs');
const port = 3000;
const server = http.createServer((req, res) =>{
   // res.statusCode = 200; // sinaliza que a requisição foi feita com sucesso
   // res.setHeader('Content-Type', 'text/html'); // seta o header para retornar html
 
    fs.readFile('./estudo/ler_html/mensagem.html', (error, data) =>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });

});

server.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
});