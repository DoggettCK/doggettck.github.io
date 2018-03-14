var games = function() {
  return $("#games_to_play li").map(function(){
    var text = $(this).text();

    return {
      title: text,
      main: parseFloat($(this).data("main")),
      extra: parseFloat($(this).data("extra")),
      complete: parseFloat($(this).data("complete")),
      average: parseFloat($(this).data("average")),
      systems: systems(this),
    };
  });
};

var systems = function(game) { 
  return ["ps4", "vita"].filter(function(system){
    return $(game).data(system);
  });
};

var sort_games = function(time) {
  return games().filter(function(i, game){
    return game[time] > 0.0;
  }).sort(function(a, b){
    return a[time] - b[time];
  }).toArray();
};

var build_top_games_element = function(time, header_text, games_list) {
  var header = $("<div/>").addClass("col-xs-6");
  var ol = $("<ol/>");

  header.append($("<h3/>").text(header_text))
  header.append(ol);

  for (var i = 0; i < games_list.length; i++) {
    var game = games_list[i];
    var li = $("<li/>");
    var contents = $("<h4/>").text(game['title'] + " (" + game[time] + " hours)");
    var systems = game['systems'];

    $.each(systems, function(i, system) {
      contents.append($("<img/>").attr({src: "images/" + system + ".svg"}));
    });
    
    li.append(contents);
    ol.append(li);
  }

  return header;
};

var update_ui = function(time, time_text, top_n) {
  $("#summary").empty();
  var sorted_games = sort_games(time);
  var total_hours = sorted_games.reduce(function(sum, game){ return sum + game[time]; }, 0);
  var shortest = sorted_games.slice(0, top_n);
  var longest = sorted_games.slice(-top_n).reverse();

  $("#games_to_play li").addClass("list-group-item col-xs-4");
  $("#summary").append($("<h2/>").text("That's " + total_hours + " total hours of gaming to look forward to."));
  $("#summary").append(build_top_games_element(time, "Shortest " + top_n + " games (" + time_text + ")", shortest));
  $("#summary").append(build_top_games_element(time, "Longest " + top_n + " games (" + time_text + ")", longest));
};

$("#summary_controls li").click(function() {
  update_ui($(this).data('time'), $(this).text(), 3);
});

$("#summary_controls li:first").click();
