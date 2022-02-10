import { GuitarMaker } from "./GuitarMaker"


export class SpecialGuitar extends GuitarMaker {
    private _specialized: boolean;
    private _typeOfGuitar: string;
    
    //typeOfGuitar, what the user passes in
    constructor(guitarBodyShape: string, typeOfGuitar : string) {
        super(guitarBodyShape);
        this._specialized = true;
        this._typeOfGuitar = typeOfGuitar;
    }

    dispGuitarType(): string {
        return "This guitar is " + this._typeOfGuitar + " : " + this._specialized;
    }
}
