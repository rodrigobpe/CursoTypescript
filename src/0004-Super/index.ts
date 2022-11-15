export class Pessoa {
    constructor(
        public name: string,
        public surname: string,
        private idade: number,
        protected cpf: string
    ) { }

    getIdade(): number {
        return this.idade;
    }
    getCpf(): string {
        return this.cpf;
    }
    getNomeCompleto(): string {
        return `${this.name} ${this.surname}`
    }
}

// quando vc quiser colocar outras infos de uma classe que herdou do pai, deve se usar o construtor e dps um super para inferir que está mandando os dados
//  para o construtor da classe pai
export class Aluno extends Pessoa {
    matricula:number
    constructor(name:string,surname:string,idade:number,cpf:string,matricula:number){
        super(name,surname,idade,cpf)
        this.matricula = matricula;
    }
};
const aluno1 = new Aluno("Fulano", "fulaninho", 16, "000.000.000.12",202211987)
console.log(aluno1)

// const pessoa1 = new Pessoa("Rodrigo","Batista Pereira",20,"000.000.000-83");
// console.log(pessoa1.getCpf())
// console.log(pessoa1.getIdade())
// console.log(pessoa1.getNomeCompleto())