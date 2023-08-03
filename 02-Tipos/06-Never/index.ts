const error = (): never => {
    throw new Error("Algo deu errado!");
}

const loop = (): never => {
    while(true) {
        console.log("Executando loop...");
    }
}

const validate = (value: any) => {
    if(typeof value === "string") {
        return "É string";
    } else if(typeof value === "number") {
        return "É number";
    }

    console.log(error());
}

validate('Teste');