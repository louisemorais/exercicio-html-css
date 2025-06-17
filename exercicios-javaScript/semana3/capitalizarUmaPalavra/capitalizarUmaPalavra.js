let frase= prompt("escreva uma frase");

function maiusculo(texto){
  return texto.split(" ").map(palavra => palavra.charAt().toUpperCase() + palavra.slice(1)).join(" ");
}

let resultado=maiusculo(frase)

console.log(resultado);