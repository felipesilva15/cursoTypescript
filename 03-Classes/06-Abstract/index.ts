abstract class Pessoa {
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

    protected abstract profissao: string;
    public abstract qualSuaProfissao(): string;
}

class Felipe extends Pessoa {
    protected profissao: string = "Programador";

    constructor() {
        super("Felipe", 19);
    }

    public qualSuaProfissao(): string {
        return `O ${this.nome} é ${this.profissao}`;
    }
}

class Roberto extends Pessoa {
    protected profissao: string = "Programador";

    constructor() {
        super("Roberto", 49);
    }

    public qualSuaProfissao(): string {
        return `O ${this.nome} é ${this.profissao}`;
    }
}