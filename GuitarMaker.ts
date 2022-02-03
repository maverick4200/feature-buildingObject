export class GuitarMaker {
    //guitar body shape ex: Flying v, strat ,explorer etc.
    private guitarType:string;

    constructor(guitarType:string) {
        this.guitarType = guitarType;
    }

    disp():string {
        return "The guitar is a: "+this.guitarType;
    }
}
