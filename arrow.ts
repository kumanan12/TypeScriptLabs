function addAll(numbers:Array<number>): number{
    let sum = 0;
    numbers.forEach(number => {sum += number});
    return sum;
}

var numbers = [1, 2, 3, 4, 5]
var sum3 = addAll(numbers);

