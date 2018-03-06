$("#games_to_play li").addClass("list-group-item col-xs-4");

var total_hours = $("#games_to_play li").toArray().reduce(function(sum, element){
  var text = $(element).text();
  var match = text.match(/\((\d+(\.\d+)?) hours\)/i);

  if (match) {
    sum += parseFloat(match[1]);
  }

  return sum;
}, 0);

$("div.jumbotron").append($("h2").text("That's " + total_hours + " total hours of gaming to look forward to"));
