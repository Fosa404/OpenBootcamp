let Nombre="Giuliano";
let Apellido="Fossatti";
let estudiante= `${Nombre} ${Apellido}`;

let estudianteMayus= estudiante.toUpperCase();
let estudianteMinus= estudiante.toLowerCase();


let numLetras= estudiante.length;


let primerLetraNombre= Nombre.charAt(estudiante);
let ultimaLetraApellido= estudiante.charAt(estudiante.length -1);


let elimEspacio= estudiante.replace(estudiante,`${Nombre}${Apellido}`);


let includeNombre= estudiante.includes(Nombre);

