export namespace Pessoa {
    export namespace Joao {
        export let nome: string = "João";

        export const calc= () => {
            return 1 + 1;
        }
    }

    export namespace Maria {
        export let nome: string = "Maria";

        export const calc= () => {
            return 1 + 1;
        }
    }
}

console.log(Pessoa.Joao.nome);
console.log(Pessoa.Maria.nome);