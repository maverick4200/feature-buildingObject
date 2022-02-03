"use strict";
exports.__esModule = true;
exports.GuitarMaker = void 0;
var GuitarMaker = /** @class */ (function () {
    function GuitarMaker(guitarType) {
        this.guitarType = guitarType;
    }
    GuitarMaker.prototype.disp = function () {
        return "The guitar is : " + this.guitarType;
    };
    return GuitarMaker;
}());
exports.GuitarMaker = GuitarMaker;
