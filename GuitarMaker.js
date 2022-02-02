"use strict";
exports.__esModule = true;
exports.GuitarMaker = void 0;
var GuitarMaker = /** @class */ (function () {
    function GuitarMaker(guitarBodyShape) {
        this.guitarBodyShape = guitarBodyShape;
    }
    GuitarMaker.prototype.disp = function () {
        return "The guitar's body shape is : " + this.guitarBodyShape;
    };
    return GuitarMaker;
}());
exports.GuitarMaker = GuitarMaker;
