const fn = (nome: string, idade?: number) => {
    return `nome: ${nome}, idade: ${idade ? idade : "Idade não definida!"}`
}

console.log(fn('Felipe', 19));
console.log(fn('Felipe'));
