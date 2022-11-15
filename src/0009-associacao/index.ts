export class Escritor {
    private _ferramenta:Ferramenta | null = null;
    constructor(private _nome: string) {}

    get nome():string{
        return this._nome;
    }
    get ferramenta():Ferramenta | null{
        return this._ferramenta;
    }

    set ferramenta(ferramenta:Ferramenta | null){
        this._ferramenta = ferramenta;
    }  
    escrever():void{
        if(this.ferramenta === null){ 
            console.log("Não posso escrever sem ferramenta");
            return;
        }
        this.ferramenta.escrever()
    }
}

export abstract class Ferramenta {
    constructor(private _nome: string) { }
    get nome(): string {
        return this._nome;
    }
    abstract escrever():void;
}

export class Caneta extends Ferramenta {
    escrever(): void {
        console.log(`${this.nome} está escrevendo...`)
    }
}
export class MaquinaEscrever extends Ferramenta {
    escrever(): void {
        console.log(`${this.nome} está digitando...`)
    }
}

const escritor = new Escritor("Joaquin");
const caneta = new Caneta("Bic");
const maquinaEscrever = new MaquinaEscrever("Digitalizadora");

escritor.ferramenta = maquinaEscrever
escritor.ferramenta = caneta
escritor.ferramenta = null
escritor.escrever()
