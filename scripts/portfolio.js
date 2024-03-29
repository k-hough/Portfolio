"use strict";

var validateForm = function() {

        // for tracking if all input is valid
        var isValid = true;

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
            $("#error-name").text("please enter a name");
            $("#name").focus();
            isValid = false;
        }

        if (emailValue === "") {
            $("#error-email").text("please enter an email address");
            if (isValid === true) {
                $("#email").focus();
            }
            isValid = false;
        }
        else if (emailRegex.test(emailValue) === false) {
            $("#error-email").text("please enter a valid email");
            if (isValid === true) {
                $("#email").focus();
            }
            isValid = false;
        }
        return isValid;
};

$(document).ready(function(){

    // load more projects
    $("#load-more").click(function() {
        $("#more-projects").show();
        $("#load-more").hide();
    });

    // validate name and email in contact form & replace text in contact form when user submits
    $("#submit").click(function() {

        var inputIsValid = validateForm();
        var mailScript = "https://www.keithsportfolio.com/scripts/mail-workparts.php?prodenv=true";

        if (inputIsValid === true) {
            var formData = $("#contact-form").serialize();
            $.post(mailScript, formData,
                function(responseText) {
                    $("#submit").text("Thanks. I'll be in touch.");
                    $("#submit").addClass("form-button-click");
                    setTimeout(refreshButton, 4000);
                });

            $("#name").val("");
            $("#email").val("");
            $("#message").val("");
        }
    });

    // refresh contact form after user submits
    function refreshButton() {
        $("#submit")
            .text("SEND")
            .removeClass("form-button-click");
    };
});
