const navegacao = ["Home", "Sobre", "Contato", "batata"];

const div = document.createElement("div");
div.id = "container";

const menus = document.createElement("nav");

navegacao.forEach(nav => {
    const link = document.createElement("a");
    link.textContent = nav;
    link.href = "#";
    menus.appendChild(link);
});

div.appendChild(menus);

document.body.appendChild(div);
