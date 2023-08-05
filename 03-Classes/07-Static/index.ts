class Utils {
    static cloneObject(object: Array<{}>) {
        return JSON.parse(JSON.stringify(Object.assign(object)));
    }
}

const compras: Array<{}> = [
    {
        nome: 'Coxinha',
        valor: 10
    },
    {
        nome: 'Miojo',
        valor: 3
    }
];

console.log(Utils.cloneObject(compras));