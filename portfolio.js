"use strict";

$(document).ready(function(){

    // load more projects
    $("#load-more").click(function() {
        $("#more-projects").show();
        $("#load-more").hide();
    });

    // replace text in contact form when user submits
    $("#submit").click(function() {

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
