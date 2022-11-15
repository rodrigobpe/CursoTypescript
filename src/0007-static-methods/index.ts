export class Pessoa{
    constructor(
        public nome:string,
        public sobrenome:string,
        public idade:number,
        public cpf:string
    ){}
    static criaPessoa(nome:string,sobrenome:string):Pessoa{
        return new Pessoa(nome,sobrenome,0,"000.000.000.00")
    }
}

const pessoa = Pessoa.criaPessoa("José","Aquino")

console.log(pessoa)