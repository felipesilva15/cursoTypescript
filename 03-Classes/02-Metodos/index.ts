class Pessoa {
    nome: string = "";
    idade: number = 0;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    comer(comida: string): string {
        return `O ${this.nome} comeu ${comida}`;
    }

    fezAniversario(): string {
        return `O ${this.nome} fez ${++this.idade} anos de idade`;
    }
}

let pessoa = new Pessoa("Felipe Silva", 19);

console.log(pessoa.comer("Coxinha"));
console.log(pessoa.fezAniversario());