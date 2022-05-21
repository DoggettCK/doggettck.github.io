const untimed_game = (game) => `<div class="col-md-4">${game.title}</div>`

const untimed_game_list = function(header, games) {
  const untimed_games = games.map((game) => untimed_game(game)).join("\n")

  return `
  <div class="row">
    <div class="text-center col-md-12 h3">${header}</div>
    ${untimed_games}
  </div>
  `
}

const timed_game = function(time, game, full_width = false) {
  let hours = 0;

  switch(time) {
    case "main":
      hours = game.times.main;
      break;
    case "extra":
      hours = game.times.extra;
      break;
    default:
      hours = game.times.complete;
  }

  let children = [`<span>${game.title} (${hours} hours)</span>`]

  if (game.ps) {
    children.push(`<img src="images/ps.svg" alt="Playstation">`)
  }

  if (game.vita) {
    children.push(`<img src="images/vita.svg" alt="Vita">`)
  }

  if (full_width) {
    return `<div>${children.join("\n")}</div>`
  }
  else{
    return `<div class="col-md-4">${children.join("\n")}</div>`
  }
}

const timed_game_list = function(header, time, games) {
  const timed_games = games.map((game) => timed_game(time, game)).join("\n")

  return `
  <div class="row">
    <div class="text-center col-md-12 h3">${header}</div>
    ${timed_games}
  </div>
  `
}

const summary_time = (total_hours) => `That's ${total_hours} total hours of gaming to look forward to.`

const apply_template = function(container_id, new_content) {
  const el = document.getElementById(container_id);

  el.replaceChildren();
  el.insertAdjacentHTML("beforeend", new_content);
}

const update_ui = function(time) {
  const total_hours = time_summary(time);
  const num_games = 5;

  apply_template("summary_time", summary_time(total_hours));
  apply_template("shortest", shortest(time, num_games));
  apply_template("longest", longest(time, num_games));
  apply_template("random", timed_game(time, random_game(), true));
  apply_template("games_to_play", timed_game_list("Games to Play", time, games_to_play()));
  apply_template("reruns", untimed_game_list("Games to Platinum or replay from other systems", reruns()));
  apply_template("completed", untimed_game_list("Games I've Beaten", completed()));
  apply_template("jettisoned", untimed_game_list("Jettisoned or Won't Play", jettisoned()));
}

const shortest = function(time, num_games) {
  switch(time) {
    case "main":
      var sort_func = (a, b) => (a.times.main >= b.times.main) ? 1 : -1;
      var filter_func = (game) => game.times.main > 0;
      break;
    case "extra":
      var sort_func = (a, b) => (a.times.extra >= b.times.extra) ? 1 : -1;
      var filter_func = (game) => game.times.extra > 0;
      break;
    default:
      var sort_func = (a, b) => (a.times.complete >= b.times.complete) ? 1 : -1;
      var filter_func = (game) => game.times.complete > 0;
  }

  const shortest_games = games_to_play()
    .sort(sort_func)
    .filter(filter_func)
    .slice(0, num_games)
    .map((game) => `<li>${timed_game(time, game, true)}</li>`);

  return `
  <h3>Shortest ${num_games} games (${user_friendly_time(time)})</h3>
  <ol>${shortest_games.join("\n")}</ol>
  `
}

const longest = function(time, num_games) {
  switch(time) {
    case "main":
      var sort_func = (a, b) => (a.times.main < b.times.main) ? 1 : -1;
      var filter_func = (game) => game.times.main > 0;
      break;
    case "extra":
      var sort_func = (a, b) => (a.times.extra < b.times.extra) ? 1 : -1;
      var filter_func = (game) => game.times.extra > 0;
      break;
    default:
      var sort_func = (a, b) => (a.times.complete < b.times.complete) ? 1 : -1;
      var filter_func = (game) => game.times.complete > 0;
  }

  const longest_games = games_to_play()
    .sort(sort_func)
    .filter(filter_func)
    .slice(0, num_games)
    .map((game) => `<li>${timed_game(time, game, true)}`);

  return `
  <h3>Longest ${num_games} games (${user_friendly_time(time)})</h3>
  <ol>${longest_games.join("\n")}</ol>
  `
}

const user_friendly_time = function(time) {
  switch(time) {
    case "main":
      return "Main Story";
    case "extra":
      return "Main Story + Extras";
    default:
      return "Complete";
  }
}

const sort_by_game_title = function(game_a, game_b) {
  return game_a.title.localeCompare(game_b.title);
};

const random_game = function() {
  const playable = games_to_play();

  return playable[Math.floor(Math.random() * playable.length)];
}

const games_to_play = function() {
  return all_games
    .filter(game => !game.jettisoned && !game.rerun && !game.completed)
    .sort(sort_by_game_title);
}

const completed = function() {
  return all_games
    .filter(game => game.completed)
    .sort(sort_by_game_title);
}

const jettisoned = function() {
  return all_games
    .filter(game => game.jettisoned)
    .sort(sort_by_game_title);
}

const reruns = function() {
  return all_games
    .filter(game => game.rerun)
    .sort(sort_by_game_title);
}

const time_summary = function(time) {
  switch(time) {
    case "main":
      return games_to_play().reduce((total, game) => total + game.times.main, 0);
    case "extra":
      return games_to_play().reduce((total, game) => total + game.times.extra, 0);
    default:
      return games_to_play().reduce((total, game) => total + game.times.complete, 0);
  }
}

update_ui("complete");
