
let dia = parseInt(prompt("Digite o dia:"));
let mes = parseInt(prompt("Digite o mês:"));
let ano = parseInt(prompt("Digite o ano:"));

let dataValida = true;


if (ano <= 0 || ano >= 9999) {
  dataValida = false;
  console.log("seu ano está incorreto")
}


if (mes < 1 || mes > 12) {
  dataValida = false;
  console.log("seu mês está incorreto")
}


if (dataValida) {
  let diasNoMes;

  switch (mes) {
    case 2:
      diasNoMes = 28; 
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      diasNoMes = 30;
      break;
    default:
      diasNoMes = 31;
  }

  if (dia < 1 || dia > diasNoMes) {
    dataValida = false;
  }
}


if (dataValida) {
  console.log("Data válida");
} else {
  console.log("Data inválida");
}
