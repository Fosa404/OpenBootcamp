class Estudiante {
    constructor(nombre) {
        this.nombre = nombre
    };

    asignaturas = ["HTML", "CSS", "Javascript"];

    obtenDatos() {
         const obj = {nombre: this.nombre,
            asignaturas : this.asignaturas};

            return obj;
    }
}

const alumn = new Estudiante("Giuliano");

console.log(alumn);

console.log(alumn.obtenDatos())