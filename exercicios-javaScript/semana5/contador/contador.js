    let contador=0;
    const valor = document.getElementById("valor");
    const Adicionar = document.getElementById("adicionar");
    const Subtrair = document.getElementById("subtrair");
    const Zerar = document.getElementById("zerar");

    Adicionar.addEventListener("click", () => {
      contador++;
      valor.textContent = contador;
    });

    Subtrair.addEventListener("click", () => {
      contador--;
      valor.textContent = contador;
    });

    Zerar.addEventListener("click", () => {
      contador = 0;
      valor.textContent = contador;
    });