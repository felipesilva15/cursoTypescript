let array1: [string, string, number, boolean] = ['Felipe', 'Silva', 123, false];
let array2: Array<string> = ['Felipe', 'Silva'];
let array3: Array<string | number> = ['Felipe', 'Silva', 123, 'Teste'];

console.log(array1);
console.log(array2);
console.log(array3);

let obj1: { nome: string, sobrenome: string, idade: number, gostaDeComida: boolean } = { 
    nome: 'Felipe', 
    sobrenome: 'Silva', 
    idade: 19, 
    gostaDeComida: true 
};

let obj2: Array<{ nome: string, sobrenome: string, idade: number, gostaDeComida: boolean }> = [
    { 
        nome: 'Felipe', 
        sobrenome: 'Silva', 
        idade: 19, 
        gostaDeComida: true 
    }
];

console.log(obj1);
console.log(obj2);