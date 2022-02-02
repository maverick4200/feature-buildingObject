"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ElectricGuitar = void 0;
var GuitarMaker_1 = require("./GuitarMaker");
var ElectricGuitar = /** @class */ (function (_super) {
    __extends(ElectricGuitar, _super);
    function ElectricGuitar(guitarBodyShape) {
        var _this = _super.call(this, guitarBodyShape) || this;
        _this.amplifier = true;
        return _this;
    }
    ElectricGuitar.prototype.electricGuitar = function () {
        return "This guitar is electric: " + this.amplifier;
    };
    return ElectricGuitar;
}(GuitarMaker_1.GuitarMaker));
exports.ElectricGuitar = ElectricGuitar;
