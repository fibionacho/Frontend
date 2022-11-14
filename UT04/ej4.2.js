/**
  Declara una clase llamada Mascotas, que reciba en el constructor los valores nombre y cantidad
de comida en gramos al día que consume. Definir un método que imprima las
características de cada mascota.


Declarar luego una clase llamada MascotasComida, que herede de Mascotas y añada el
método mascotaDias, que en base a, si las bolsas de comida son de 3kg, para todas
las mascotas, calcule los días que durará la bolsa.


Crea 3 mascotas diferentes y muestra la información para cada una de ellas.
 */

class Mascotas{

     constructor (nombre, cantidad) {
        this.nombre=nombre;
        this.cantidad=cantidad;
    }

    tostring(){
        document.write(" nombre "+this.nombre);
        document.write(" Cantidad de gramos necesarios "+this.cantidad);
    }

}
class MascotasComida extends Mascotas{

    constructor(nombre, cantidad){
        super(nombre, cantidad);
    }


mascotaDias(){
   let comidaDia= 3000/(this.cantidad);
   return document.write(" La comida le dura "+comidaDia+" dias");
}
}
const perro=new MascotasComida("Firulais", 200);
perro.tostring();
perro.mascotaDias();
document.write("<br>");
const gato= new MascotasComida("Bigotitos", 100);
gato.tostring();
gato.mascotaDias();
document.write("<br>");
const hamster = new MascotasComida("Galletas",20);
hamster.tostring();
hamster.mascotaDias();