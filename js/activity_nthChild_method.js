// Toggle Table Events
$(document).ready(function () {
  $("*#events").click(function () {
    $(this).toggleClass("active");
  });
});

//User interaction with table cells
$(document).ready(function () {
  $("*#events").click(function () {
    var content = $(this).text();
    var index = $(this).index() + 1; //Show Cliff Sites based on User interaction
    var site = $(".site:nth-child(" + (index) + ")").text();

    if (content != "Not Available") {
      $(this).toggleClass("tdhighlight");

      if ($(this).hasClass("tdhighlight")) {
        $("#displaySelected").css("visibility", "visible");
        $("#displaySelected").css("margin-top", "2em");
        $("#result").append("<p>" + content + " at " + site + "</p>");
      } else {
        $("#result p:contains(" + content + " at " + site + ")").remove();

        if ($("#result").has("p").length == false) {
          $("#displaySelected").css("visibility", "hidden");
          $("#displaySelected").css("margin-top", "0");
        }
      }
    }
  });
});
