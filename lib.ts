declare var toastr;
//private function
function youCantCallMe() {
    toastr.info("Inside youCantCallMe ");
}
export const sqrt = Math.sqrt;

export function square(x) {
    return x * x;
}