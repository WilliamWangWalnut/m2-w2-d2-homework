// // Toggle Table Events
$(document).ready(function () {
  $("*#events").click(function () {
    $("#modalbtn").click();
  });
});

//User interaction with table cells
$(document).ready(function () {
  $("*#events").click(function () {
    var content = $(this).text();
    var index = $(this).index(); //Show Cliff Sites based on User interaction
    var site = $(".site:eq(" + index + ")").text();
    $("#result").append("<p>" + content + " at " + site + "</p>");
  });
});

//clear result when modal closed
$(document).ready(function() {
  $(".modal").on("hidden.bs.modal", function(){
    $("#result").html("");
  });
});