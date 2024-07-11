import { Carrinho } from "./carrinho.js";
import { ErrorDomain } from './utilidades/errorDomain.js';

class CaixaDaLanchonete {
    metodosDePagamentosAceitosPeloCaixa = ["dinheiro", "credito", "debito"]

    calcularValorDaCompra(metodoDePagamento, itensNaoFormatado){

        try {
            if(!this.metodosDePagamentosAceitosPeloCaixa.includes(metodoDePagamento)){
                throw new ErrorDomain("Forma de pagamento inválida!")
            }

            if(itensNaoFormatado.length <= 0){
                throw new ErrorDomain("Não há itens no carrinho de compra!")
            }  

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
        } catch (error) {

            if(error.domain){
                return error.message
            }
        }

    }
}

export { CaixaDaLanchonete };