
let x = 3;
function getRandomNumber(randomize:boolean) {
    if (randomize) {
        let x = Math.random();
        return x;
    }
    return x;
}
var result = getRandomNumber(false);



