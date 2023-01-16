function compruebaNombre(name) {
    return new Promise(function (resolve, reject) {
        if (name === "pablo") {
            resolve("Bien, te llamas Pablo");
        } else {
            reject("Un momento, tu no eres Pablo");
        }
    });
}

compruebaNombre('Pablo')
    .then(response => console.log(response))
    .catch(error => console.log(error));

//callbacks en promesas

const miFuncion = (val) => {
    return new Promise((resolve, reject) => {
        if (val) {
            resolve("el valor es true!");
        } else {
            reject("el valor es false!");
        }
    });
}



//igual que arriba pero con manejadores no hay que introducir directamente 
//las funciones
const funcExito = (res) => {
    console.log(res)
};
const funcError = (res) => {
    console.error(res);
};

miFuncion(true).then(funcExito, funcError);
//Logueará el mensaje de exito por console.log
miFuncion(true).then(funcExito).catch(funcError);
//Logueará el mensaje de exito por console.log

miFuncion(false).then(funcExito, funcError);
//Logueará el mensaje de error por console.error
miFuncion(false).then(funcExito).catch(funcError);


//Encadenamiento de promesas

new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
}).then((result) => {
    alert(result); //1
    return result * 2;
}).then((result) => {
    alert(result);//2
    return result * 2;
}).then((result) => {
    alert(result);//4
    return result * 2;
});



let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 1000);
});

promise.then((result) => {
    alert(result); //1
    return result * 2;
});
promise.then((result) => {
    alert(result); //1
    return result * 2;
});
promise.then((result) => {
    alert(result); //1
    return result * 2;
});


//ERROR Y GESTION

/*Un error capturado por el bloque catch se considerará manejado si este manejador no lanza a asu vez un nuevo error y 
continuará su ejecución */
new Promise((resolve, reject) => {
    throw new Error("Error!");
}).catch((error) => {
    alert("El error ha sido manejado con exito");
}).then(() => alert("este manejador se ejecuta"));

/**Un Manejador de eeror que lance un nuevo error será manejado por el siguiente catch mas cercano */

new Promise((resolve, reject) => {
    throw new Error("Error!");
}).catch((error) => {
    throw error;
    
}).then(() => alert("este manejador no se ejecuta"))
.catch((error)=> {
    alert("Este manejador se ejecuta con el error");
});