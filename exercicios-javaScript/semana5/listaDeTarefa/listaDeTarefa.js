const input= document.getElementById("tarefas");
const botao= document.getElementById("adicionar");
const lista= document.createElement('ul');

botao.addEventListener("click", (event)=>{
    event.preventDefault();
    const conteudo = input.value.trim();
        if(conteudo!==""){
            const dados = items(conteudo);
            lista.appendChild(dados);
            input.value="";
            localStorage.setItem(conteudo, JSON.stringify(conteudo));
        }
}
)


function items(conteudo){
    const item = document.createElement("li");
    item.textContent= conteudo;
    item.appendChild(apagar(item,conteudo));
    return item;
}


function apagar(item,conteudo){
    const deleteButton= document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'; 
    deleteButton.style.marginLeft="10px"
    deleteButton.classList.add("deleteButton");

    deleteButton.addEventListener('click', ()=>{
        lista.removeChild(item);
        localStorage.removeItem(conteudo);
    }
    )
    return deleteButton;
}


function carregar(){
    Object.keys(localStorage).forEach(chave => {
        const conteudo = JSON.parse(localStorage.getItem(chave));
        const item = items(conteudo);
        lista.appendChild(item);
    })
}