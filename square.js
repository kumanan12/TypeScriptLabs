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
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(length) {
        var _this = _super.call(this, length, length) || this;
        _this.length = length;
        return _this;
    }
    Object.defineProperty(Square.prototype, "perimeter", {
        get: function () {
            return this.length * 4;
        },
        enumerable: false,
        configurable: true
    });
    return Square;
}(Rectangle));
var sq = new Square(5);
var perimeter = sq.perimeter;
var area = sq.area();
function showResult() {
    toastr.info("Perimeter is ".concat(perimeter, " and Area is ").concat(area));
}
