const myDog={
    "name": "Mailo",
    "legs": 4,
    "tails": 1,
    "anios": "diez",
    "enemies": ["water","cat"]
};

delete myDog.tails;

console.log(myDog);

const whatname=myDog.name;
console.log(whatname);

let edad=myDog["anios"];
let newWord="legs";

const piernas=myDog[newWord]; 
console.log(piernas);

myDog.ladrido="GuauGuau";
console.log(myDog);

let persona={
    nombre: "Nicolas",
    apellido: "Sanchez",
    email: "nico@gmail.com",
    edad: 37,
    nombreCompleto: function(){
        return this.nombre+" "+this.apellido;
    }
}
console.log(persona.nombreCompleto);

