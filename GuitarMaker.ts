export class GuitarMaker {
    //guitar body shape ex: Flying v, strat ,explorer etc.
    private guitarBodyShape:string;

    constructor(guitarBodyShape:string) {
        this.guitarBodyShape = guitarBodyShape;
    }

    disp():string {
        return "The guitar's body shape is : "+this.guitarBodyShape;
    }
}
