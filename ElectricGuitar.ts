import { GuitarMaker } from "./GuitarMaker"


export class ElectricGuitar extends GuitarMaker {
    private amplifier: boolean;

    constructor(guitarBodyShape: string) {
        super(guitarBodyShape);
        this.amplifier = true;
    }

    electricGuitar(): string {
        return "This guitar is electric: " + this.amplifier;
    }
}
