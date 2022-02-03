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
exports.AcousticGuitar = void 0;
var GuitarMaker_1 = require("./GuitarMaker");
var AcousticGuitar = /** @class */ (function (_super) {
    __extends(AcousticGuitar, _super);
    function AcousticGuitar(guitarType) {
        var _this = _super.call(this, guitarType) || this;
        _this.amplifier = false;
        return _this;
    }
    AcousticGuitar.prototype.acousticGuitar = function () {
        return "This guitar is acoustic: " + this.amplifier;
    };
    return AcousticGuitar;
}(GuitarMaker_1.GuitarMaker));
exports.AcousticGuitar = AcousticGuitar;
