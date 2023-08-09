"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyGpio = exports.isArray = void 0;
function isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
}
exports.isArray = isArray;
function verifyGpio(sck, cs, so) {
    var set = new Set(so);
    set.add(sck);
    set.add(cs);
    return set.size === so.length + 2;
}
exports.verifyGpio = verifyGpio;
