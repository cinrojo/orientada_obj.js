/* 2) Crear una clase de libro
Crear una clase Libro con propiedades como título, autor y año de publicación. 
Implementar métodos para obtener y establecer estas propiedades.
 */
class Libro {
    constructor(titulo, autor, anio) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
    }
    getTitulo() {
        return this.titulo;
    }  
    
    getAutor() {
        return this.autor;
    }
    
    getAnio() {
        return this.anio;
    }
    
    establecerTitulo(nuevoTitulo) {
        this.titulo = nuevoTitulo;
    }

    establecerAutor(nuevoAutor) {
        this.autor = nuevoAutor;
    }

    establecerAnio(nuevoAnio) {
        this.anio = nuevoAnio;
    }
}
const libro = new Libro("poo","carolina rocca",1888)
console.log(libro.getTitulo(),libro.getAnio(),libro.getAutor());

libro.establecerTitulo("poo2");
libro.establecerAutor("carolina rocca2");
libro.establecerAnio(18882);

console.log(libro.getTitulo(),libro.getAnio(),libro.getAutor());
