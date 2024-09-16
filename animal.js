class animal {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }
    hacersonido(){
        
    }
  
}  class perro extends animal {
        constructor(nombre,edad) {
            super(perro, perro)
        }
        hacersonido(){
            console.log("el perro hace whuaooo")
        }
    }
    class gato extends animal {
        constructor(nombre, edad) {
            super(gato, gato)
        }
        hacersonido(){
            console.log("el gato hace miauuu")
        }
    }
    class pajaro extends animal {
        constructor(nombre, edad) {
            super(pajaro, pajaro)
        }
        hacersonido(){
            console.log("el pajaro hacer pio pio")
        }
    }

    function crearAnimal(tipo, nombre, edad) {
        switch (tipo) {
            case "perro":
                return new perro(nombre, edad)
            case "gato":
                return new gato(nombre, edad)
            case "gato":
                return new pajaro(nombre, edad)
            default:
                return "el animal esta sin control"
        }
    }

let c = new crearAnimal("perro", "max", 7);
c.hacersonido()