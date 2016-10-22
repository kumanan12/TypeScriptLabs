function addAll(x, y) {
    var numbers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        numbers[_i - 2] = arguments[_i];
    }
    var sum = x + y;
    numbers.forEach(function (arg) {
        sum += arg;
    });
    return sum;
}
var result1 = addAll(1, 2, 3, 4, 5);
