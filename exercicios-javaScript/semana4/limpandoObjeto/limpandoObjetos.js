const dados = {
  nome: "João",
  idade: null,
  cidade: "São Paulo",
  email: undefined
};

for (let chave in dados) {
  if (dados[chave] === null || dados[chave] === undefined) {
    delete dados[chave];
  }
}

console.log(dados);