const me = {Nombre: "Giuliano",
Apellido: "Fossatti",
Edad: 31,
Altura: 1.69,
eresDesarrollador: false};

const edad = me.Edad;

const list = [me, {Nombre: "Samuel", Edad: 34, Altura: 1.72,},{Nombre:"Matias"
, Edad: 32, Altura: 1.70}];

const ordList = list.sort((a,b) => a.Edad - b.Edad);