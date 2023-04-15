//primera parte

function suma (a, b, c){

    return a + b + c
};

suma(8,5,3);

//segunda parte

class Coche {
    constructor(puertas){
        this.puertas = puertas
    }

    addDoors(num){

        this.puertas += num
    }
};

 const miCoche = new Coche(2);

 miCoche.addDoors(2);