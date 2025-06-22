const input= document.getElementById("tarefas");
const botao= document.getElementById("adicionar");
const lista= document.createElement('ul');

botao.addEventListener("click", (event)=>{
    event.preventDefault();
    const conteudo = input.value;
        if(conteudo.trim()!==""){
            const item = document.createElement("li");
            item.textContent= conteudo;
            lista.appendChild(item);
            input.value="";
        }
}
)
document.body.appendChild(lista);
