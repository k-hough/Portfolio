"use strict";

var validateForm = function() {
        var nameValue;
        var emailValue;
        nameValue = $("#name").val();
        emailValue = $("#email").val();

        if (nameValue === "") {
            $("#error-name").text("Cannot be empty");
            /* document.getElementById("error-name").innerHTML = "Cannot be empty"; */
        }

        if (emailValue === "") {
            $("#error-email").text("Cannot be empty");
            /* document.getElementById("error-email").innerHTML = "Cannot be empty"; */
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

/*
        var formData = $("#contact-form").serialize();
        $.post('mail/mail.php', formData,
            function(responseText) {
                $("#submit").text("Thanks. I'll be in touch.");
                $("#submit").addClass("form-button-click");
                setTimeout(refreshButton, 4000);
            });
*/

    });

    // refresh contact form after user submits
    function refreshButton() {
        $("#submit")
            .text("SEND")
            .removeClass("form-button-click");
    };
});
