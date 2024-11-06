
console.log("iniciar transferencia");

function procesandoTransferencia() {
    return new Promise((resolve, reject) => {
       
        setTimeout(() => {
            console.log("procesando");
            resolve()
        }, 5000);

    }
    )
}

async function ejecutar() {
    await procesandoTransferencia();
    console.log("transferencia correcta");
}

ejecutar();