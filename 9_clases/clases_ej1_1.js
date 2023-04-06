class Persona{
    constructor(nombre,apellido){
        this._nombre=nombre;
        this._apellido=apellido;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre= nombre;
    }
}

let Persona1 = new Persona("Nico","San");
Persona1.nombre="Alexander";
console.log(Persona1.nombre);

let Persona2= new Persona("Leo","San");
console.log(Persona2);