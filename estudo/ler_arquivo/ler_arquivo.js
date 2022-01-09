const fs = require('fs') // Importa o File System

// Recebe o path do arquivo; charset, erro e data
fs.readFile('./estudo/ler_arquivo/texto.txt', 'utf8', (error, data) =>{ 
    if(error){
        console.log(error);
        return;
    }
    console.log(data);
});
