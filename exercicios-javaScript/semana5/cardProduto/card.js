const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 }
];

const section= document.getElementById("produto");

produtos.forEach(produto =>{
  const cartao = document.createElement('div');
  cartao.classList.add('cartao');

  const titulo = document.createElement('h3');
  titulo.textContent= produto.nome;

  const precos= document.createElement('p');
  precos.textContent= `R$${produto.preco}`

  cartao.appendChild(titulo);
  cartao.appendChild(precos);

  section.appendChild(cartao);

});
