"use strict";
$(document).ready(function() {
  $(".sidenav").sidenav();
  setTimeout(function() {
    $("#loader").css("display", "none");
    $("main").fadeIn();
    $(".modal").modal();
  }, 0);
});
