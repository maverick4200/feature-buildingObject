import {GuitarMaker} from "./GuitarMaker";
import {ElectricGuitar} from "./ElectricGuitar"
import {AcousticGuitar} from "./AcousticGuitar"
import { Keytar } from "./Keytar";

let newGuitar = new GuitarMaker("StratGuitar");
console.log(newGuitar.disp());
let newEletricGuitar = new ElectricGuitar("electricGuitar");
let newAcousticGuitar = new Keytar("acousticGuitar");

console.log(newAcousticGuitar.dispGuitarType());
console.log(newAcousticGuitar.disp());
console.log( newEletricGuitar.dispGuitarType());
console.log(newEletricGuitar.disp());




