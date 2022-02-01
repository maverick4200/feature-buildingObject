class GuitarMaker {
    //guitar body shape ex: Flying v, strat ,explorer etc.
    private guitarBodyShape:string;

    constructor(guitarBodyShape:string) {
        this.guitarBodyShape = this.guitarBodyShape
    }

disp():void {
    console.log("The guitar's body shape is : "+this.guitarBodyShape)
    }
}
