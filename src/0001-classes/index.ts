// Declarando uma classe de forma longa

export class Library {
    readonly books: Books[] = [];
    constructor(public name:string){}
    InsertBooks(books:Books):void{
        this.books.push(books);
    }
    ShowAllBooks():void{
        for(const book of this.books){
            console.log(book)
        }
    }
}

export class Books {
    constructor(
        public readonly idBook: number,
        public readonly title: string,
        public description: string
    ) { }
}

const library = new Library('Seu Jorjão');
const livro1 = new Books(1,'Harry Potter',"As aventuras de Harry Potter");
const livro2 = new Books(2,'Harry Potter e a Pedra filosofal',"As aventuras de Harry Potter e a Pedra Filosofal");
library.InsertBooks(livro1);
library.InsertBooks(livro2);
console.log(library);