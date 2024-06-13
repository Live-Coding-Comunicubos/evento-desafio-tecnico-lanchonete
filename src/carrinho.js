import { cardapio } from "./cardapio.js"
import { Item } from "./item.js"

export class Carrinho{
    produtos = []
    constructor(itensNaoFormatado){
        itensNaoFormatado.map((itemNaoFormatado) => {
            const [codigo, quantidade] = itemNaoFormatado.split(',')
            const produtoExiste = cardapio.find((itemDoCardapio)=> {
                if(itemDoCardapio.codigo === codigo){
                    return itemDoCardapio
                }
            })
            const produto = new Item(produtoExiste.valor, quantidade)
            this.produtos.push(produto)
        })
    }

    calcularTotal(){
        const total = this.produtos.reduce((acumulator, produtoAtual)=> {
            return produtoAtual.total + acumulator
        }, 0)
        return total
    }
}