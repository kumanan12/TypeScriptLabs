var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Square = (function (_super) {
    __extends(Square, _super);
    function Square(length) {
        _super.call(this, length, length);
        this.length = length;
    }
    Object.defineProperty(Square.prototype, "perimeter", {
        get: function () {
            return this.length * 4;
        },
        enumerable: true,
        configurable: true
    });
    return Square;
}(Rectangle));
var sq = new Square(5);
var perimeter = sq.perimeter;
var area = sq.area();
function showResult() {
    toastr.info("Perimeter is " + perimeter + " and Area is " + area);
}
