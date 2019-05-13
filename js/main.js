"use strict";
$(document).ready(function() {
  $(".sidenav").sidenav();
  $(".modal").modal();
  setTimeout(function() {
    $("#loader").css("display", "none");
    $("main").fadeIn();
  }, 0);
});
