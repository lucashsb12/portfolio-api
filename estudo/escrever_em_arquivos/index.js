const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) =>{
   // res.statusCode = 200; // sinaliza que a requisição foi feita com sucesso
   // res.setHeader('Content-Type', 'text/html'); // seta o header para retornar html
    
    const urlInfo = require('url').parse(req.url, true);
    const name = urlInfo.query.name;

    if(!name){
        fs.readFile('./estudo/escrever_em_arquivos/form.html', (error, data)=>{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        });
    }
    // sobrescreve o conteúdo
    // else{
    //     fs.writeFile("arquivo.txt", name, (error, data) =>{
    //         res.writeHead(302, {Location: './estudo/escrever_em_arquivos/index.js'});
    //         return res.end();
    //     });
    // }
    // Atualiza o conteúdo
    else{
        const nameNewLine = name + '\r\n' // Força a criar a quebrar uma linha no linux e windows
        fs.appendFile("arquivo.txt", nameNewLine, (error, data) =>{
            res.writeHead(302, {Location: './estudo/escrever_em_arquivos/index.js'});
            return res.end();
        });
    }
});

server.listen(port, () =>{
    console.log(`Servidor rodando na porta ${port}`);
});