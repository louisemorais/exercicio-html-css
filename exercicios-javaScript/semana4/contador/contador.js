let objeto={
    valor:0,
    incrementar() {this.valor += 1;},
    decrementar() {this.valor -= 1;},
    mostrarValor() {console.log(`O valor atual é ${this.valor}`);}
}
objeto.incrementar();
objeto.incrementar();
objeto.decrementar();
objeto.mostrarValor();
