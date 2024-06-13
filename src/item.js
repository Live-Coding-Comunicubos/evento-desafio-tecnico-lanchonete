export class Item{
    preco
    quantidade
    total
    constructor(preco, quantidade){
        this.preco = preco
        this.quantidade = quantidade
        this.total = preco * quantidade
    }
}