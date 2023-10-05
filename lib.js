"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.square = exports.sqrt = void 0;
//private function
function youCantCallMe() {
    toastr.info("Inside youCantCallMe ");
}
exports.sqrt = Math.sqrt;
function square(x) {
    return x * x;
}
exports.square = square;
