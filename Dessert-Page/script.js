$(document).ready(function() {
  $("#submit-9,#submit-8,#submit-7,#submit-6,#submit-5,#submit-4,#submit-3,#submit-2,#submit-1").click(function() {
    window.location.reload();
    alert("Thank you for your feedback!");
  });

  $("#formButton-9, #submit-9").click(function() {
    $("#recipe-9").toggle();
    $("#form-9").toggle();
  });

  $("#formButton-1, #submit-1").click(function() {
    $("#recipe-1").toggle();
    $("#form-1").toggle();
  });

  $("#formButton-8, #submit-8").click(function() {
    $("#recipe-8").toggle();
    $("#form-8").toggle();
  });

  $("#formButton-7, #submit-7").click(function() {
    $("#recipe-7").toggle();
    $("#form-7").toggle();
  });

  $("#formButton-6, #submit-6").click(function() {
    $("#recipe-6").toggle();
    $("#form-6").toggle();
  });

  $("#formButton-5, #submit-5").click(function() {
    $("#recipe-5").toggle();
    $("#form-5").toggle();
  });

  $("#formButton-4, #submit-4").click(function() {
    $("#recipe-4").toggle();
    $("#form-4").toggle();
  });

  $("#formButton-3, #submit-3").click(function() {
    $("#recipe-3").toggle();
    $("#form-3").toggle();
  });

  $("#formButton-2, #submit-2").click(function() {
    $("#recipe-2").toggle();
    $("#form-2").toggle();
  });

});
