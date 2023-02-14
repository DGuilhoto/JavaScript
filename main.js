console.log("Hello world");
// 14.02
//Variáveis e operadores

// let = palavra reservada
let nomeCompleto; //camel case
nomeCompleto = "Daniela Lopes"; //atribuição

console.log(nomeCompleto);
nomeCompleto = "Daniela Lopes Guilhoto";  //re-atribuição (redefinir)
console.log(nomeCompleto);


let idade = 19;
idade = 37; 

console.log(idade);

console.log("Meu nome é " + nomeCompleto); //concatenar

console.log("Meu nome é " + nomeCompleto + " e tenho " + idade +  " anos! ");

const cpf = "000.000.000-00";  //constante (impede a re-atribuição)

//Tipos
let golsSofridos = 3; // numero = number
let chanceDerrota = 0.55; //numero decimal
let posseBola = 33.57;  // 33,57
let nomeTime = "Valência";  //string

let patrocínio;  //undefined = não tem valor definido
patrocínio = "SoulCode"
let timeGanhou = true;  //Lê-se: é verdade que o timeGanhou
let timePerdeu = false; //Lê-se: é falso que o timePerdeu

// Operadores Aritméticos
let soma = 200 + 100;
let sub = 100 - 55;
let mult = 5 * 7;
let div = 400 / 25;
let resto = 8 % 3;
let expressao = (soma + sub) * div;
let expressao2 = mult - div  / resto;

console.log(soma);
console.log(`A subtração é ${sub}!`);  //Template strings interpolação de strings
console.log(`A multiplicação é ${mult}!`);
console.log(div);
console.log(resto);
console.log(expressao);
console.log(expressao2);

let i = 0;
// i = i + 1; //novo valor de i é 0 + 1 = 1
// i = i + 1; //novo valor de i é 1 + 1 = 2
// i = i + 1; //novo valor de i é 2 + 1 = 3
// i = i + 1; //novo valor de i é 3 + 1 = 4
// i++; //i = i + 1
console.log(i)
i++; // altera o valor de i somando i + 1 = incremento
console.log(i);

//Operadores relacionais (>, <, >=, <=, ==, !=)
let a = 3; 
let b = 5; 

console.log(a > b); // A é maior que B?
console.log(a < b); // A é menor que B?
console.log(b >=a); //B é maior ou igual a A?
console.log(a <= b); //A é menor ou igual a B?
console.log(a == b); //A é igual a B?
console.log(a != b); //A é diferente de B?

console.log(a == "3"); //A é igual a "3"?
console.log(a === "3"); //A é estritamente igual a 3?
console.log(a !== "3"); //A é estritamente diferente a "3"?

// O operador === compara Valor e Tipo

let peso = 108.600;
let altura = 1.65;
let resultado = peso/ (altura*altura);
console.log("Meu IMC é ",resultado)

const PI = 3.14;
let r = 30;
let resultado1 = PI * r * r
console.log(resultado1)

let resultado2 = 2 * PI * r
console.log(resultado2)

let c = 26
let resultado3 = c * 1.8 + 32
console.log(resultado3)