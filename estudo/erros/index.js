const x = "10";

// Não encerra o programa 
try{
    x = 2;
}
catch(error){
    console.log("Erro!!!");
}

// Encerra o programa caso seja desperado o erro
if(!Number.isInteger(x)){
    throw new Error("O Valor de x não é um número inteiro!");
}

console.log("Continuando o código...");