interface Pessoa {
    nome: string,
    idade: number,
    readonly cpf: string,
    enabled(): boolean
}

// const pessoa: { nome: string, idade: number } = {
//     nome: "Felipe",
//     idade: 19
// };

const pessoa: Pessoa = {
    nome: "Felipe",
    idade: 19,
    cpf: "10938903928",
    enabled: () => {
        return true;
    }
};

class Joao implements Pessoa {
    nome: string = "João";
    idade: number = 16;
    readonly cpf: string = "45685958652";

    enabled(): boolean {
        return true;
    }
}