const dadosPessoais = { nome: "Lucas", idade: 30 };
const endereco = { cidade: "São Paulo", estado: "SP" };

const perfilCompleto = {...dadosPessoais, ...endereco };

console.log(perfilCompleto);


