function getFormData(){
    let username = $("#username").val();
    let email = $("#email").val();

   toastr.info(`Username: ${username} 
                Email: ${email} `);
}

$("#btnSubmit").click(getFormData);