$(document).ready(function(){function e(){$("#block-answer").addClass("").removeClass("show-block-valid show-block-error")}var a=window.setTimeout(function(){e()},4e3);$("#contact-form [type='submit']").click(function(o){o.preventDefault(),$("#valid-form").html('Sending <i class="fa fa-spinner fa-pulse fa-fw"></i>'),$(".block-message").addClass("").removeClass("show-block-valid show-block-error");var s=$("input[name=checking]").val(),t=$("input[name=name]").val(),l=$("input[name=email-address]").val(),n=$("select[name=reason]").val(),c=$("textarea[name=message]").val();post_data={userChecking:s,userName:t,userEmail:l,userSubject:n,userMessage:c},$.post("php/contact-me.php",post_data,function(o){"error"==o.type?(output='<div class="error-message"><p class="notify-valid">'+o.text+"</p></div>",$("#valid-form").html("Send my Message"),$("#block-answer").addClass("show-block-error").removeClass("show-block-valid"),window.clearTimeout(a),a=window.setTimeout(function(){e()},4e3)):(output='<div class="success-message"><p class="notify-valid">'+o.text+"</p></div>",$("#contact-form input").val(""),$("#contact-form textarea").val(""),$("#contact-form select").val("placeholder").addClass("no-selection"),$("#valid-form").html("Sent!"),$("#block-answer").addClass("show-block-valid").removeClass("show-block-error"),window.clearTimeout(a),a=window.setTimeout(function(){e()},4e3)),$("#block-answer").html(output)},"json")}),$("#contact-form input, #contact-form textarea").keyup(function(){$("#answer").fadeOut()})});