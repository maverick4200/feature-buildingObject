import { GuitarMaker } from "./GuitarMaker"

export class AcousticGuitar extends GuitarMaker {
    private amplifier: boolean;

    constructor(guitarBodyShape: string) {
        super(guitarBodyShape);
        this.amplifier = false;
    }

    acousticGuitar(): string {
        return "This guitar is acoustic: " + this.amplifier;
    }
}
