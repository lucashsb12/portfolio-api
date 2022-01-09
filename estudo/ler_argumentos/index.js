// Método puro com node

// const args = process.argv.slice(2);
// const nome = args[0].split("=")[1];
// const idade = args[1].split("=")[1];

// console.log(args);
// console.log(`Meu nome é ${nome} e tenho ${idade} de idade`);

// Método com Minimist

const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

console.log(args);