function addAll(numbers) {
    var sum = 0;
    numbers.forEach(function (number) { sum += number; });
    return sum;
}
var numbers = [1, 2, 3, 4, 5];
var sum3 = addAll(numbers);
