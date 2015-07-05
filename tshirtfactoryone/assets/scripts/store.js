jQuery(document).ready(function($){
  //Right Click Protection
  //$(document).bind("contextmenu",function(e){ return false;});

  //Content Area Mods
  if(pageName != "PageAboutMeViewStore") {
    $(".pagecontainer > table:eq(1) tr:first td:first").addClass("tshirtfoMAINBG");
    $(".tshirtfoMAINBG table:eq(4)").addClass("tshirtfoCONTENT");
    $(".tshirtfoCONTENT").find("br[clear = none]").remove();
  }

  //Footer
  var d = new Date();
  var footer = "<table align=\"center\" width=\"940\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" style=\"margin-bottom: 22px;\">";
  footer += "<tr>";
  footer += "<td id=\"tshirtfoFOOTER\"><p>" + d.getFullYear() + " &copy; Your Favorite T-Shirt | All Rights Reserved. | <a href=\"http:\/\/anijs.github.io\" target=\"_blank\">Custom eBay Store Designs<\/a><\/p><\/td>";
  footer += "<\/tr>";
  footer += "<\/table>";
  if(pageName != "PageAboutMeViewStore") {
    if($(".tshirtfoCONTENT").length > 0) {
      $(".tshirtfoCONTENT").after(footer);
    }
  }
});
