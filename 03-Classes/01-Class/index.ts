class Pessoa {
    nome: string = "";
    idade: number = 0;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

let pessoa1 = new Pessoa("Felipe Silva", 19);
let pessoa2 = new Pessoa("Felipe Souza", 34);

console.log(pessoa1);