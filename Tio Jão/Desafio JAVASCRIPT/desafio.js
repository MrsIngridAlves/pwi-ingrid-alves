
const A = parseFloat(prompt("Digite o valor de A:"));
const B = parseFloat(prompt("Digite o valor de B:"));
const C = parseFloat(prompt("Digite o valor de C:"));

const soma = A + B;

console.log(`A soma entre A e B é: ${soma}`);

if (soma < C) {
    console.log("A soma de A e B é menor que C.");
} else {
    console.log("A soma de A e B não é menor que C.");
}