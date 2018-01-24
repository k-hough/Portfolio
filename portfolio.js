"use strict";

var validateForm = function() {

        // initialize error messages
        $("#error-name").text("");
        $("#error-email").text("");

        // capture input
        var nameValue;
        var emailValue;
        nameValue = $("#name").val();
        emailValue = $("#email").val();

        /* email pattern:
        check 1st char is letter
        (voluntary) check next char is letter or number or - _ .
        check next char is @
        check next char is letter
        (voluntary) check next char is letter or number or -
        check next char is .
        check next 2 char are letters) 
        */
        var emailRegex = /^[a-zA-Z][a-zA-Z0-9\-_.]*@[a-zA-Z0-9][a-zA-Z0-9\-]*\.[a-zA-Z]{2,}$/;

        if (nameValue === "") {
            $("#error-name").text("Cannot be empty");
            /* document.getElementById("error-name").innerHTML = "Cannot be empty"; */
        }

        if (emailValue === "") {
            $("#error-email").text("Cannot be empty");
            /* document.getElementById("error-email").innerHTML = "Cannot be empty"; */
        }
        else if (emailRegex.test(emailValue) === false) {
            $("#error-email").text("not valid email");
        }
};

$(document).ready(function(){

    // load more projects
    $("#load-more").click(function() {
        $("#more-projects").show();
        $("#load-more").hide();
    });

    // validate name and email in contact form & replace text in contact form when user submits
    $("#submit").click(function() {

        validateForm();

        var formData = $("#contact-form").serialize();
        $.post('mail/mail.php', formData,
            function(responseText) {
                $("#submit").text("Thanks. I'll be in touch.");
                $("#submit").addClass("form-button-click");
                setTimeout(refreshButton, 4000);
            });
    });

    // refresh contact form after user submits
    function refreshButton() {
        $("#submit")
            .text("SEND")
            .removeClass("form-button-click");
    };
});
