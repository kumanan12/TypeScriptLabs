function getFormData() {
    var username = $("#username").val();
    var email = $("#email").val();
    toastr.info("Username: ".concat(username, " \n                Email: ").concat(email, " "));
}
$("#btnSubmit").click(getFormData);
