const _ = require('lodash');
const argv = require('yargs');

/*Utilizando lodash 
let peticiones = process.argv[2];
console.log("La petición recibida es %s",peticiones); */
/** Utilizando yargs para procesar peticiones del url **/
console.log(argv.argv.usuario);
if(argv.argv.usuario === "Ingeniero"){
    let objeto1 = {"nombre": "Maria"};
    let objeto2 = {"apodo": "Maestro"};
    let objeto3 = [
        {nombre: "Maria", apellido: "Perez", edad: 28},
        {nombre: "Maria", apellido: "Gomez", edad: 22},
        {nombre: "José", apellido: "Perez", edad: 27},
        {nombre: "Pedro", apellido: "Perez", edad: 37}
    ];
    //
    let respuesta = _.find(objeto3, objeto1);
    console.log(respuesta);
}
else{
    console.log("Usuario no valido");
}
