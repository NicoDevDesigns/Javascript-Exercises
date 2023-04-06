import saludar, {PI,Trabajar,usuario} from "./constantes.js";
import {sumar,restar} from "./aritmetica.js";
import {aritmetica} from "./aritmetica.js";
import {PonteEstudiar as estudia} from "./tareas.js";

console.log("Archivos modulos.js");
console.log(PI,usuario);
console.log("La suma es: ", sumar(5,6));
console.log("La resta es: ", restar(8,3));
console.log("la suma de aritmetica es:", aritmetica.sumar2(5,5));
saludar();
let trabajo = new Trabajar();
trabajo; 
estudia();