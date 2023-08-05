enum Mes {
    JAN = "Janeiro",
    FEV = "Fevereiro",
    MAR = "Março"
}

console.log(Mes);
console.log(Mes.JAN);

const individuo: { nome: string, mesAniversario: string }  = {
    nome: "Felipe Silva",
    mesAniversario: Mes.FEV
};

console.log(individuo);