import { cardapio } from "./cardapio.js"
import { Item } from "./item.js"
import { ErrorDomain } from "./utilidades/errorDomain.js"

export class Carrinho{
    produtos = []
    extras = []
    principais = []
    constructor(itensNaoFormatado){
        itensNaoFormatado.map((itemNaoFormatado) => {
            const [codigo, quantidade] = itemNaoFormatado.split(',')

            if(quantidade <= 0){
                throw new ErrorDomain("Quantidade inválida!")
            }

            const produtoExiste = cardapio.find((itemDoCardapio)=> {
                if(itemDoCardapio.codigo === codigo){
                    return itemDoCardapio
                }
            })

            if(!produtoExiste){
                throw new ErrorDomain("Item inválido!")
            }

            if(produtoExiste.descricao.includes("extra")){
                this.extras.push(produtoExiste)
            } else {
                this.principais.push(produtoExiste)
            }

            const produto = new Item(produtoExiste.valor, quantidade)
            this.produtos.push(produto)
        })

        if(!this.existeProdutoSemPrincipal()){
            throw new ErrorDomain("Item extra não pode ser pedido sem o principal")
        }
    }

    calcularTotal(){
        const total = this.produtos.reduce((acumulator, produtoAtual)=> {
            return produtoAtual.total + acumulator
        }, 0)
        return total
    }

    existeProdutoSemPrincipal(){
        if(this.extras.length > 0){
            return (this.extras.every((produtoExtra)=>{
                return this.principais.some((produtoPrincipal)=> {
                    return produtoExtra.codigo === produtoPrincipal.extra
                })
            }))
        } else {
            return true
        }

     
    }
}