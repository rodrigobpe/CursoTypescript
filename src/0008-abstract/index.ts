// Classes abstratas não podem ser instanciadas, apenas herdadas. Ex: Personagem n pode ser instanciado, porém 
// Monstro e Guerreiro recebem todos os atributos e métodos de Personagem;
// um método ou atributo do tipo abstract, deve ser feito em todas as classes que herdam as caracerísticas da classe PAI
export abstract class Personagem {
    constructor(
        protected nome: string,
        protected ataque: number,
        protected vida: number)
        {}
    atacar(personagem:Personagem):void{
        this.bordao()
        personagem.perderVida(this.ataque);
    }

    perderVida(forcaAtaque:number){
        this.vida -= forcaAtaque
        if(this.vida <= 0){
            console.log(`${this.nome} agora tem ${this.vida = 0} de vida...`)
            return console.log(`${this.nome} morreu!`)
            
        }
        console.log(`${this.nome} agora tem ${this.vida} de vida...`)
  
    }

    abstract bordao():void;
}

export class Guerreiro extends Personagem{
    bordao(): void {
        console.log("DEMMAAAAAAAAAACIAAAAAAA!!")
    }
}
export class Monstro extends Personagem{
    bordao(): void {
        console.log("GRRRRRRRRRRRRRRRRRRRRRRRR");
        
    }
}

const guerreiro = new Guerreiro("Gladie",87,100)
const monstro = new Monstro("Wordle",8,500)

monstro.atacar(guerreiro)
guerreiro.atacar(monstro)
guerreiro.atacar(monstro)
guerreiro.atacar(monstro)
guerreiro.atacar(monstro)
guerreiro.atacar(monstro)
