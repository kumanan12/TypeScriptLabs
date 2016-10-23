// toastr.info("Hello Array");
declare var log;

let numbers = [ 10, 20, 30, 40, 50, 60, 70];

let foundNumber =numbers.find(t => t === 30 );

let foundNumberIndex = numbers.findIndex(t => t === 30);

// Array.from() example
function getSum(){
    let numbers = Array.from(arguments ,  t => {return t - 10}); 
    return numbers.reduce((prev, next) => {return prev + next });
}

//Array.of() example.


let sum = getSum(10, 20, 30);
