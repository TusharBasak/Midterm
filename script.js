function contactinfoForm() {
    var name_imfo = document.getElementById("name").value;
    var email_info = document.getElementById("email").value;
    var suggestion_info = document.getElementById("suggestion").value;

     var display_output = document.getElementById("displayoutput");
    display_output.innerHTML = `<h4>Contact Information Of Customer </h4><p><strong>Name:</strong> 
     ${name_imfo}  </p><p><strong>Email:</strong>   ${email_info}
       </p>
       <p><strong>Feedback:</strong>   ${suggestion_info}  </p>`;
}
