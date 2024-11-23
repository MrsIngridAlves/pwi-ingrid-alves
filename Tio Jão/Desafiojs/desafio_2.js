/* 14 - Faça um algoritmo que receba um valor A e B, e troque o valor de A por B e o valor de B por A e imprima na tela os valores. */


let A = 5;
let B = 10;

let aux = A;

A = B;
B = aux;

console.log("Novo valor de A:", A);
console.log("Novo valor de B:", B);