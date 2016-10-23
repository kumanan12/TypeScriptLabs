var x = 3;
function getRandomNumber(randomize) {
    if (randomize) {
        var x_1 = Math.random();
        return x_1;
    }
    return x;
}
var result = getRandomNumber(false);
