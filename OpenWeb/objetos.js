var persona = {
    nombre : 'Pepito',
    edad : 30,
    saludar: function(){
        console.log(`Hola ${this.nombre}`);
    }
};

console.log(persona);

var jugador = {
    fuerza : 1,
    incrementarFuerza : function(){
        this.fuerza = this.fuerza+1;
    },
    consultarFuerza : function(){
        console.log(this.fuerza);
    }
};

jugador.consultarFuerza();

jugador.incrementarFuerza();

jugador.consultarFuerza();