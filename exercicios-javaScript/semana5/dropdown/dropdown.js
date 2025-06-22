const botao = document.getElementById("botao");
const menu = document.getElementById("menu");

botao.addEventListener("click", (event) => {
    menu.classList.toggle("esconder");
    event.stopPropagation(); 
  });


document.addEventListener("click", () => {
    menu.classList.add("esconder");
  });

menu.addEventListener("click", (event) => {
    event.stopPropagation();
  });