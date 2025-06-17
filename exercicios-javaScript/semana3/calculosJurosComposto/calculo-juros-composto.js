let capital= parseFloat(prompt("digite um numero decimal"));
let meses= parseInt(prompt("digite um numero"));

let capitalComposto = capital * Math.pow((1 + 0.05), meses);

console.log(capitalComposto)