import {GuitarMaker} from "./GuitarMaker";
import {ElectricGuitar} from "./ElectricGuitar"
import {AcousticGuitar} from "./AcousticGuitar"

let newGuitar = new GuitarMaker("StratGuitar");
console.log(newGuitar.disp());
let newEletricGuitar = new ElectricGuitar("electricGuitar");
let newAcousticGuitar = new AcousticGuitar("acousticGuitar");

console.log(newAcousticGuitar.acousticGuitar());
console.log(newAcousticGuitar.disp());
console.log( newEletricGuitar.electricGuitar());
console.log(newEletricGuitar.disp());




