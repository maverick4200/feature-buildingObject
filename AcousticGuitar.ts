import { GuitarMaker } from "./GuitarMaker"

export class AcousticGuitar extends GuitarMaker {
    private amplifier: boolean;

    constructor(guitarType: string) {
        super(guitarType);
        this.amplifier = false;
    }

    acousticGuitar(): string {
        return "This guitar is acoustic: " + this.amplifier;
    }
}
