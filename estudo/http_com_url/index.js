const http = require('http');
const url = require('url');
const port = 3000
const server = http.createServer((req, res) =>{
    const urlInfo = require('url').parse(req.url, true);
    const name = urlInfo.query.name;

    res.statusCode = 200; // sinaliza que a requisição foi feita com sucesso
    res.setHeader('Content-Type', 'text/html'); // seta o header para retornar html
    
    if(!name){
        res.end(`
            <h1> Preencha o seu nome:</h1>
            <form method="GET">
                <input type="text" name="name" />
                <input type="submit" />
            </form>    
        `)
    }
    else{
        res.end(`<h1>Seja bem-vindo ${name}</h1>`);
    }

});

server.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
});