var numbers = [10, 20, 30, 40, 50, 60, 70];
var foundNumber = numbers.find(function (t) { return t === 30; });
var foundNumberIndex = numbers.findIndex(function (t) { return t === 30; });
// Array.from() example
function getSum() {
    var numbers = Array.from(arguments, function (t) { return t - 10; });
    return numbers.reduce(function (prev, next) { return prev + next; });
}
//Array.of() example.
var sum = getSum(10, 20, 30);
