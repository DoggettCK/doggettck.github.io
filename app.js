var sort_games = function() {
  var hours_matcher_re = /^([^\(]+)\((\d+(\.\d+)?) hours\)/i;

  return $("#games_to_play li").map(function(){
    var text = $(this).text();
    var match = text.match(hours_matcher_re);

    return {
      title: text,
      clean_title: match[1],
      hours: parseFloat(match[2])
    };
  }).sort(function(a, b){
    return a.hours - b.hours;
  }).toArray();
};

var build_top_games_element = function(header_text, games_list) {
  var header = $("<div/>").addClass("col-xs-6");
  var ol = $("<ol/>");

  header.append($("<h3/>").text(header_text))
  header.append(ol);

  for (var i = 0; i < games_list.length; i++) {
    ol.append($("<li/>").text(games_list[i].title));
  }

  return header;
};

var update_ui = function(top_n) {
  var sorted_games = sort_games();
  var total_hours = sorted_games.reduce(function(sum, game){ return sum + game.hours; }, 0);
  var shortest = sorted_games.slice(0, top_n);
  var longest = sorted_games.slice(-top_n).reverse();

  $("#games_to_play li").addClass("list-group-item col-xs-4");
  $("div.jumbotron").append($("<h2/>").text("That's " + total_hours + " total hours of gaming to look forward to."));
  $("div.jumbotron").append(build_top_games_element("Shortest " + top_n + " games", shortest));
  $("div.jumbotron").append(build_top_games_element("Longest " + top_n + " games", longest));
};

update_ui(3);
