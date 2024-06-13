import { Carrinho } from "./carrinho.js";

class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itensNaoFormatado){
        const carrinho = new Carrinho(itensNaoFormatado)
        let total = carrinho.calcularTotal();
        const descontoDinheiro = 0.05
        const acrescimoCredito = 0.03

        if(metodoDePagamento === 'dinheiro'){
            total -= total * descontoDinheiro
        } else if(metodoDePagamento === 'credito') {
            total += total * acrescimoCredito
        }
  
        return `R$ ${total.toFixed(2).replace('.', ',')}`
    }
}

const caixa = new CaixaDaLanchonete()
console.log(caixa.calcularValorDaCompra('credito', ['sanduiche,1', 'cafe,1']))

export { CaixaDaLanchonete };