const vendas = [
  { produto: "Notebook", valor: 2500 },
  { produto: "Monitor", valor: 1200 },
  { produto: "Teclado", valor: 250 }
];


let total=0;
let teste= vendas.forEach((vendeu)=>{
  console.log(`produto: ${vendeu.produto}, valor do produto: ${vendeu.valor}, valor vendido: ${total += vendeu.valor}`)
})
 



