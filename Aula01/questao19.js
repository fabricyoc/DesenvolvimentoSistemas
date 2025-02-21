// Questão 19) Solicite o salário bruto de uma pessoa e desconte 7% do INSS e 14% do IRRF.

let salarioBruto = 1000;
let inss = salarioBruto * 0.07; // 7%
let irrf = salarioBruto * 0.14; // 14%
let salarioLiquido = salarioBruto - (inss + irrf);


console.log("Salário bruto: R$" + salarioBruto);
console.log("(-) INSS: R$" + inss);
console.log("(-) IRRF: R$" + irrf);
console.log("Salário líquido: R$" + salarioLiquido);


