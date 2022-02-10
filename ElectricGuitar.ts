import { SpecialGuitar } from "./SpecialGuitar";


export class ElectricGuitar extends SpecialGuitar {

    constructor(guitarBodyShape: string) {
        super(guitarBodyShape,"Electric");
    }

}
