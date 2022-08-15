const fechaHoy = new Date();

const fechaNacimiento = new Date(1991,06,24);

const masTarde = fechaHoy.getTime() > fechaNacimiento.getTime();
console.log(masTarde);

const diaNacim = fechaNacimiento.getDate();
console.log(diaNacim);

const mesNacim = fechaNacimiento.getMonth() + 1;
console.log(mesNacim);

const anyoNacim = fechaNacimiento.getFullYear();
console.log(anyoNacim);




