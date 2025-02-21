// Q37, lista 01 - A lanchonete Gostosura vende apenas um tipo de sanduíche, cujo recheio inclui duas fatias de queijo, uma fatia de presunto e um hambúrguer. Sabendo que cada fatia de queijo ou presunto pesa 50 gramas, e que o hambúrguer pesa 100 gramas, faça um algoritmo em que o dono forneça a quantidade de sanduíches a fazer, e a máquina informe as quantidades (em quilos) de queijo, presunto e carne necessários para compra.

// variáveis
let fatiaQueijo = 50; // 50g, cada fatia
let fatiaPresunto = 50;
let hamburguer = 100;

// entrada
let sanduichesAFazer = 5;

// processamento
let quiloQueijo = (sanduichesAFazer * fatiaQueijo * 2) / 1000;
let quiloPresunto = (sanduichesAFazer * fatiaPresunto) / 1000;
let quiloHamburguer = (sanduichesAFazer * hamburguer) / 1000;

// saída
console.log("\t*** LANCHONETE ***");
console.log("Para " + sanduichesAFazer + " sanduíches é necessário: ");
console.log("- " + quiloQueijo + "kg de queijo");
console.log("- " + quiloPresunto + "kg de presunto");
console.log("- " + quiloHamburguer + "kg de hamburguer");


