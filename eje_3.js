/* 3) Crear una clase de estudiante que herede de Persona
Crear una clase Estudiante que herede de la clase Persona y tenga propiedades adicionales como grado y promedio.
 Implementar métodos para actualizar el promedio y obtener detalles del estudiante.
 */
class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    

}

class Estudiante extends Persona {
    constructor(nombre, edad, genero, grado, promedio) {
        super(nombre, edad, genero);
        this.grado = grado;
        this.promedio = promedio;
    }
    actualizarPromedio(nuevoPromedio) {
        this.promedio = nuevoPromedio;
    }

    
    imprimir() {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.genero}, Grado: ${this.grado}, Promedio: ${this.promedio}`);
    }
}
const estudiante = new Estudiante("joan", 15,"m", "4t0", 9.88);

estudiante.actualizarPromedio(9.99);

estudiante.imprimir();
