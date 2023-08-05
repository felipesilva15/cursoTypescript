class Pessoa {
    private nome: string = "";
    private idade: number = 0;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    public comer(comida: string): string {
        return `O ${this.nome} comeu ${comida}`;
    }

    public fezAniversario(): string {
        return `O ${this.nome} fez ${++this.idade} anos de idade`;
    }
}

const pessoa = new Pessoa("Felipe", 19);