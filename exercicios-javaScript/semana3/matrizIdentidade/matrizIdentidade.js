let ordem = parseInt(prompt("Digite a ordem da matriz identidade:"));

for (let i = 0; i < ordem; i++) {
  let linha = "";
  for (let j = 0; j < ordem; j++) {
    if (i === j) {
      linha += "1";
    } else {
      linha += "0";
    }
  }
  console.log(linha); 
}
