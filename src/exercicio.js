"use strict";

function multiplica(num1, num2) {
    return num1 * num2;
}

const soma = multiplica(5, 10);
console.log(`O resultado da soma entre os dois numeros é: ${soma}`);

function saudar(nome) {
    return `Olá ${nome}`;
}

const nomeUsuario = "Gabriel";
const mensagemSaudar = saudar(nomeUsuario);
console.log(mensagemSaudar);