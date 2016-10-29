function getFormData() {
    var username = $("#username").val();
    var email = $("#email").val();
    toastr.info("Username: " + username + " \n                Email: " + email + " ");
}
$("#btnSubmit").click(getFormData);
