export class CarrinhoDeCompras{
    private readonly _produtos: Produto[] =[];
    inserirProdutos(...produtos:Produto[]):void{
        for(const produto of produtos){
            this._produtos.push(produto)
        }
    }

    qtdProdutos():number{
        return this._produtos.length
    }
    get produtos():void{
        for(const produto of this._produtos){
            console.log(produto);
        }
        return;
    }

    valorTotal():number{
        return this._produtos.reduce((soma,produto) => soma+produto.preco,0)
    }
}

export class Produto{
    constructor(public nome:string,public preco:number){}
}

const carrinhoDeCompras = new CarrinhoDeCompras();
const prod1 = new Produto("Camiseta",48.9);
const prod2 = new Produto("Calça",98.9);
const prod3 = new Produto("Casaco",108.9);
carrinhoDeCompras.inserirProdutos(prod1,prod2,prod3)
carrinhoDeCompras.produtos
console.log(carrinhoDeCompras.qtdProdutos())
console.log(`R$${carrinhoDeCompras.valorTotal().toFixed(2)}`);
