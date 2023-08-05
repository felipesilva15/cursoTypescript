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
    private _profissao: string = "Programador";

    constructor() {
        super("Felipe", 19);
    }

    get profissao() {
        return this._profissao;
    }

    set profissao(profissao: string) {
        this._profissao = profissao;
    }
}

const felipe = new Felipe();

console.log(felipe.profissao);

felipe.profissao = "Product manager";

console.log(felipe.profissao);