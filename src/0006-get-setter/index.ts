export class Pessoa{
    constructor(
        // quando usar o setter e getter destaforma, colocar "_" antes do atributo para manter um padrão
        private _nome:string,
        private sobrenome:string,
        private idade:number,
        protected cpf:string
    ){}

    get nome():string{
        return this._nome
    }

    set nome(nome:string){
        this._nome = nome;
    }
}

const pessoa = new Pessoa("Rodrigo","José",18,"000.000.000.12");
pessoa.nome = 'Roberto'
console.log(pessoa.nome)