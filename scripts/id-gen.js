"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Code = void 0;
var Code = /** @class */ (function () {
    function Code(type, lengthCode) {
        this.type = type[0];
        this.length = lengthCode;
    }
    Code.prototype.getID = function () {
        switch (this.type) {
            case 's':
                return this.genString();
            case 'n':
                return this.genNumber();
            default:
                throw 'Erro';
        }
    };
    Code.prototype.genNumber = function () {
        var result = '';
        for (var i = 0; i < this.length; i++) {
            if (i % 4 == 0 && i != 0) {
                result += '-';
            }
            result += Math.floor(Math.random() * 10);
        }
        return result;
    };
    Code.prototype.genString = function () {
        var apb = 'abcdefghijklmnopqrstuvwxyz';
        var result = '';
        for (var i = 0; i < this.length; i++) {
            if (i % 4 == 0 && i != 0) {
                result += '-';
            }
            var char = Math.random() < 0.5
                ? apb[Math.floor(Math.random() * apb.length)].toUpperCase()
                : apb[Math.floor(Math.random() * apb.length)];
            result += char;
        }
        return result;
    };
    return Code;
}());
exports.Code = Code;
var a = new Code('n', 16);
console.log(a.getID());
