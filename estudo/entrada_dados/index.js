// Módulo do node
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// const chalk = require('chalk');

// // Recebe o texto, e a quantidade de argumentos que irá receber
// readline.question("Qual a sua linguagem preferida?", (language) =>{
//     console.log(chalk.green(`A minha linguagem preferida é ${language}`));
//     readline.close();
// });

// Módulo externo

const inquirer = require('inquirer');

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual a primeira nota?'
    },
    {
        name: 'p2',
        message: 'Qual a segunda nota?'
    }
]).then((answers) =>{
    console.log(answers);
}).catch(
    (error) => console.log(error)
);