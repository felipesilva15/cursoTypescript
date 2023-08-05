class Pessoa {
    protected nome: string = "";
    protected idade: number = 0;

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

class Felipe extends Pessoa {
    private profissao: string = "Programador";

    constructor() {
        super("Felipe", 19);
    }

    public getProfissao() {
        return `P ${this.nome} trabalha como programador`
    }
}

const felipe: Felipe = new Felipe();

console.log(felipe);
console.log(felipe.comer("Bolo"));
console.log(felipe.fezAniversario());
console.log(felipe.getProfissao());