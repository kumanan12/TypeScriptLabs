// var x = 3;
// function func(randomize) {
//     if (randomize) {
//         var x = Math.random();
//         return x;
//     }
//     return x;
// }
// var result = func(false); // undefined
// toastr.info("result= " + result);
// function getANumber(randomize) {
//     let x = 3;
//     if (randomize) {
//         let x = Math.random();
//         return x;
//     }
//     return x;
// }
var x = 3;
function getANumber(randomize) {
    if (randomize) {
        var x = Math.random();
        return x;
    }
    return x;
}
var result = getANumber(false); // undefined
function showResult() {
    toastr.info("result= " + result);
}
