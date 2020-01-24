"use strict";
$(document).ready(function() {
  $(".modal").modal();
  buildSidebar()
  setTimeout(function() {
    $("#loader").css("display", "none");
    $("main").fadeIn();
  }, 0);
});

function buildSidebar() {
  let sidebarItems = [
    {'name':'Home', 'icon':'home', 'href':'/'},
    {'name':'Easy Telegram Bot', 'icon':'sms', 'href':'/tg-js-bot'},
    {'name':'PatoBot', 'icon':'code', 'href':'/PatoBot'},
    {'name':'AdbFastbootInstaller', 'icon':'adb', 'href':'/AdbFastbootInstaller'}
  ];
  let sidebar = $('<ul>').addClass('sidenav sidenav-fixed').prop('id', 'sidebar-slide');
  for(let item of sidebarItems) {
    let newItem = $('<li>');
    if(document.location.pathname.replace('/', '') == item['href'].replace('/', '')) newItem.addClass('active');
    newItem.append($('<a>').addClass('waves-effect').prop('href', item['href']).append($('<i>').addClass('material-icons left').html(item['icon'])).append(document.createTextNode(item['name'])));
    sidebar.append(newItem);
  }
  sidebar.sidenav();
  $('body').append(sidebar)
  return true
}