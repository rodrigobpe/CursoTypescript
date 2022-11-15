export class Empresa{
    readonly nome: string;
    protected colaboradores: Colaborador[] = [];
    private readonly cnpj:string;
    constructor(nome:string,cnpj:string){
        this.nome = nome;
        this.cnpj = cnpj;
    }
    getColaboradores():void{
        for(const colaborador of this.colaboradores){
            console.log(colaborador);
        }
    }
    insertColaboradores(colaborador:Colaborador):void{
        this.colaboradores.push(colaborador);
    }
}

export class Udemy extends Empresa{
    constructor(){
        super("Udemy", "000.000.000.98")
    }
    deleteColab():Colaborador | null{
        const colaborador = this.colaboradores.pop()
        if(colaborador){ return colaborador};
        return null
        }
}

export class Colaborador{
    constructor(
        public name:string,
        public sobrenome:string
    ){}
}

const empresa = new Udemy(); 
const colaborador1 = new Colaborador("Marcio","Aquino"); 
const colaborador2 = new Colaborador("José","Emílio"); 
empresa.insertColaboradores(colaborador1);
empresa.insertColaboradores(colaborador2);
empresa.deleteColab()
console.log(empresa)