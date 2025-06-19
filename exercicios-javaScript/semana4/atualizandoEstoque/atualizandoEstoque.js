const produtos = [
  { nome: "Notebook", estoque: 4 },
  { nome: "Monitor", estoque: 0 },
  { nome: "Teclado", estoque: 2 },
  { nome: "Mouse", estoque: 0 }
];
let estoque=produtos.filter(produtos=>produtos.estoque>0);


console.log(estoque)


