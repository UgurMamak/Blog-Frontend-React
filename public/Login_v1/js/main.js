(function ($) {
  "use strict";

  /*==================================================================
    [ Validate ]*/
  var input = $(".validate-input .input100");

  $(document).click(function (event) {
    if ($(event.target).closest($(".login100-form-btn")).length) {
      var check = true;
      for (var i = 0; i < $(".validate-input .input100").length; i++) {
        if (validate($(".validate-input .input100")[i]) == false) {
          showValidate($(".validate-input .input100")[i]);
          check = false;
        }
      }
      return check;
    }
  });


/*
  $(document).ready(function (event) {

    $("#email").focus(function (event2) {
        
      hideValidate("email");
    });

    $("#password").focus(function () {
      hideValidate("password");
    });
  });
*/
  function validate(input) {
    if ($(input).attr("type") == "email" || $(input).attr("name") == "email") {
      if (
        $(input)
          .val()
          .trim()
          .match(
            /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
          ) == null
      ) {
        return false;
      }
    } else {
      if ($(input).val().trim() == "") {
        return false;
      }
    }
  }

  function showValidate(input) {
     
    //$(".wrap-input100").addClass("alert-validate");
    $("#uyarı").addClass("alert-validate");
  }

  function hideValidate(input) {
    if (input == "email") $("#emailO").removeClass("alert-validate");
    else if (input == "password") $("#passwordO").removeClass("alert-validate");
  }

  var sp=0;
  $(document).click(function(event) {
    if ($(event.target).closest($('.symbol-input102')).length)
    {
      if(sp == 0)
      {
        $('#passwordAgain').attr('type','text');
        $('#password').attr('type','text');
      $('.symbol-input102').find('i').removeClass('fa-eye');
      $('.symbol-input102').find('i').addClass('fa-eye-slash');
      sp=1;
      }
      else
      {
        $('#passwordAgain').attr('type','password');
        $('#password').attr('type','password');
        $('.symbol-input102').find('i').addClass('fa-eye');
        $('.symbol-input102').find('i').removeClass('fa-eye-slash');
        sp=0;
      }
    }
  });





})(jQuery);
