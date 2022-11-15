export class Pessoa{
    constructor(
        public name: string,
        public surname: string,
        private idade: number,
        protected cpf: string
    ){}

    getIdade():number{
        return this.idade;
    }
    getCpf():string{
        return this.cpf;
    }
    getNomeCompleto():string{
        return `${this.name} ${this.surname}`
    }
}

// Aluno está herdando as características de Pessoa, porém ele pode sobrescrever os métodos da classe "PAI"
export class Aluno extends Pessoa{
    getNomeCompleto(): string {
        return 'Isso vem de Aluno:'+this.name+' '+this.surname
    }
};
const aluno1 = new Aluno("Fulano","fulaninho",16,"000.000.000.12")
console.log(aluno1.getNomeCompleto())

// const pessoa1 = new Pessoa("Rodrigo","Batista Pereira",20,"000.000.000-83");
// console.log(pessoa1.getCpf())
// console.log(pessoa1.getIdade())
// console.log(pessoa1.getNomeCompleto())