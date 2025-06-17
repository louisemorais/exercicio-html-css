
let limite = parseInt(prompt("Digite o número limite da sequência Fibonacci:"));

let a = 0;
let b = 1;

console.log(a);
console.log(b);

let proximo = a + b;

while (proximo <= limite) {
  console.log(proximo);
  a = b;
  b = proximo;
  proximo = a + b;
}
