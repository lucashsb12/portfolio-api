const a = 22;
const b = 'Lucas';
const c = [1, 2];

// contagem de impressões
console.count(`O valor de A é: ${a}, contagem`);
console.count(`O valor de B é: ${b}, contagem`);
console.count(`O valor de C é: ${c}, contagem`);

// variável entre string 
console.log("O nome é %s, ele é programador e tem %s de idade", b, a);

// limpar o console
setTimeout(()=>{
    console.clear();
}, 2000);