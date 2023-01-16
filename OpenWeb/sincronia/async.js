async function funcionAsync(){
    return Promise.resolve("Funciona!");
}

async function funcionAsync2(){
    return "Funciona!";
}

let funcionAsync3 = async() => {return "Funciona!"};

funcionAsync.then(resp => console.log(resp));
//esto sacará "Funciona!"
funcionAsync2.then(resp => { console.log(resp)});
//esto sacará "Funciona!"


/**USO CON AWAIT */
async function funcionAsync(){
    let promise = new Promise((resolve, reject)=>{
        setTimeout(() => resolve("Hecho"), 1000)
    });
    let result = await promise; //La ejecución se para aquí
    alert (result); // Saltará una alerta con "Hecho"
}

/**El hecho de que la ejecucion en la fiuncion sea asíncrona no afecta al flujo ppal
 * del programa, se seguitan realizando todas las llamadas hasta la resolución
 */

funcionAsync();
setTimeout(()=> alert("qué tal?"), 1100);
alert("hola");

/**Esto sacará los dialos en orden:
 * hola
 * hecho
 * qué tal
 */


