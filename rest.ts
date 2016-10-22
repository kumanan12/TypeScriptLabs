function addAll(x, y,...numbers){
    let sum = x + y;
    numbers.forEach(function(arg){
        sum += arg;
    });
    return sum;
}


var result1 = addAll(1,2,3,4,5);