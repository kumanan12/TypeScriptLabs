var x = 3;
function getRandomNumber(randomize) {
    if (randomize) {
        var x = Math.random();
        return x;
    }
    return x;
}
var result = getRandomNumber(false);
function showResult() {
    toastr.info("result= " + result);
}
function showResultOfLet() {
    $.getScript("let.js")
        .done(function (script, textStatus) {
        toastr.info("result= " + result);
    })
        .fail(function (jqxhr, settings, exception) {
        toastr.error("Error occured");
    });
}
