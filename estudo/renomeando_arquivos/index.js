const fs = require('fs');

const oldName = "arquivo.txt";
const newName = "novoArquivo.txt";

fs.rename(oldName, newName, (error) =>{
    if(error){
        console.log(error);
        return;
    }
    console.log('Arquivo renomeado!');
});