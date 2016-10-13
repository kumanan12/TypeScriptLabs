function bar() {
    return {
        x: 4,
        y: 5,
        z: 6
    };
}
function foo() {
    return [1, 2, 3];
}
var _a = foo(), b = _a[2];
var _b = bar(), x = _b.x, z = _b.z;
var x = 2, y = 3, o = {
    x: x,
    y: y
};
// for(var idx of a){
//     console.log(idx);
// }
//console.log( o.x,o.y); 
