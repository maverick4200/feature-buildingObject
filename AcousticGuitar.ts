import { SpecialGuitar } from "./SpecialGuitar";

export class AcousticGuitar extends SpecialGuitar {
     
    constructor(guitarBodyShape: string) {
        super(guitarBodyShape, "Acoustic");
    }
    
}
