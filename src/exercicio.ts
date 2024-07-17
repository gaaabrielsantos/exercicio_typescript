function multiplica(num1: number, num2: number): number{
    return num1 * num2;
}

const soma = multiplica(4, 10);
console.log(`O resultado da soma entre os dois numeros é: ${soma}`);

function saudar(nome: string): string {
    return `Olá ${nome}`;
}

const nomeUsuario = "Lorena";
const mensagemSaudar = saudar(nomeUsuario);
console.log(mensagemSaudar);