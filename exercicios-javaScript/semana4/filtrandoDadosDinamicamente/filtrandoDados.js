function filtrarPorPropriedades(lista, propriedades, valores) {
  return lista.filter((item) => {
    return propriedades.every((prop, index) => item[prop] === valores[index]);
  });
}

const pessoas = [
  { nome: "João", idade: 30, cidade: "São Paulo" },
  { nome: "Maria", idade: 25, cidade: "Rio de Janeiro" },
  { nome: "João", idade: 30, cidade: "Recife" },
  { nome: "Romeu", idade: 30, cidade: "Manaus" },
  { nome: "João", idade: 20, cidade: "Rio Branco" }
];

const propriedades = ["nome", "idade"];
const valores = ["João", 30];

const resultado = filtrarPorPropriedades(pessoas, propriedades, valores);

console.log(resultado);
