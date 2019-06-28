const games = {
  "2064_read_only_memories": {"main": 9.0, "extra": 10.5, "complete": 17.5, "systems": ["vita"]},
  "99_vidas": {"main": 3.0, "extra": 3.0, "complete": 3.0, "systems": ["ps4", "vita"]},
  "absolver": {"main": 5.0, "extra": 7.0, "complete": 30.0, "systems": ["ps4"]},
  "adr1_ft": {"main": 4.5, "extra": 6.0, "complete": 8.5, "systems": ["ps4"]},
  "amnesia_a_machinefor_pigs": {"main": 4.0, "extra": 5.0, "complete": 6.5, "systems": ["ps4"]},
  "amnesia_the_dark_descent": {"main": 8.0, "extra": 9.0, "complete": 10.5, "systems": ["ps4"]},
  "another_world20th_anniversary": {"main": 2.5, "extra": 2.5, "complete": 2.5, "systems": ["vita"]},
  "aragami": {"main": 6.5, "extra": 10.0, "complete": 18.5, "systems": ["ps4"]},
  "assassins_creed_chronicles_china": {"main": 6.0, "extra": 9.5, "complete": 17.0, "systems": ["ps4"]},
  "assassins_creed_chronicles_india": {"main": 5.5, "extra": 7.0, "complete": 15.5, "systems": ["ps4"]},
  "assassins_creed_chronicles_russia": {"main": 6.5, "extra": 9.0, "complete": 14.5, "systems": ["ps4"]},
  "assassins_creed_syndicate": {"main": 18.0, "extra": 32.5, "complete": 53.0, "systems": ["ps4"]},
  "beyond_two_souls": {"main": 10.5, "extra": 12.0, "complete": 27.0, "systems": ["ps4"]},
  "bloodborne": {"main": 35.0, "extra": 45.5, "complete": 77.5, "systems": ["ps4"]},
  "borderlands_the_handsome_collection": {"main": 87.0, "extra": 120.0, "complete": 120.0, "systems": ["ps4"]},
  "broken_sword5_the_serpents_curse": {"main": 11.0, "extra": 12.0, "complete": 14.5, "systems": ["vita"]},
  "callof_duty_black_ops_iii": {"main": 9.0, "extra": 13.5, "complete": 48.5, "systems": ["ps4"]},
  "callof_duty_modern_warfare_remastered": {"main": 6.0, "extra": 7.5, "complete": 16.0, "systems": ["ps4"]},
  "childof_light": {"main": 11.0, "extra": 13.5, "complete": 15.5, "systems": ["ps4"]},
  "claire": {"main": 3.0, "extra": 3.0, "complete": 5.0, "systems": ["ps4", "vita"]},
  "conan_exiles": {"main": 17.5, "extra": 100.0, "complete": 208.0, "systems": ["ps4"]},
  "cryptofthe_necro_dancer": {"main": 15.0, "extra": 23.0, "complete": 44.0, "systems": ["ps4", "vita"]},
  "darkest_dungeon": {"main": 53.0, "extra": 79.5, "complete": 103.0, "systems": ["ps4", "vita"]},
  "darksiders_ii_deathinitive_edition": {"main": 20.0, "extra": 29.0, "complete": 46.5, "systems": ["ps4"]},
  "dayofthe_tentacle_remastered": {"main": 4.5, "extra": 5.5, "complete": 6.0, "systems": ["ps4", "vita"]},
  "dear_esther": {"main": 1.5, "extra": 1.5, "complete": 1.5, "systems": ["ps4"]},
  "destiny2": {"main": 12.0, "extra": 24.0, "complete": 99.0, "systems": ["ps4"]},
  "detroit_become_human": {"main": 11.5, "extra": 14.0, "complete": 29.0, "systems": ["ps4"]},
  "deus_ex_mankind_divided": {"main": 15.0, "extra": 29.5, "complete": 46.5, "systems": ["ps4"]},
  "downwell": {"main": 8.0, "extra": 12.0, "complete": 15.0, "systems": ["vita"]},
  "dragon_age_inquisition": {"main": 46.0, "extra": 87.5, "complete": 127.0, "systems": ["ps4"]},
  "everybodys_gonetothe_rapture": {"main": 4.5, "extra": 6.0, "complete": 9.0, "systems": ["ps4"]},
  "fallen_legion_flamesof_rebellion": {"main": 8.0, "extra": 8.0, "complete": 8.0, "systems": ["ps4", "vita"]},
  "final_fantasy7": {"main": 38.5, "extra": 55.0, "complete": 88.5, "systems": ["ps4"]},
  "final_fantasy_vi": {"main": 35.5, "extra": 41.0, "complete": 63.5, "systems": ["vita"]},
  "for_honor": {"main": 7.0, "extra": 9.0, "complete": 16.0, "systems": ["ps4"]},
  "forma8": {"main": 6.5, "extra": 7.0, "complete": 7.5, "systems": ["ps4", "vita"]},
  "foul_play": {"main": 4.5, "extra": 4.5, "complete": 10.0, "systems": ["vita"]},
  "furmins": {"main": 7.0, "extra": 7.0, "complete": 7.0, "systems": ["ps4", "vita"]},
  "godof_war_iii": {"main": 10.5, "extra": 10.5, "complete": 10.5, "systems": ["ps4"]},
  "grand_kingdom": {"main": 23.0, "extra": 65.5, "complete": 181.0, "systems": ["ps4"]},
  "grand_theft_auto_v": {"main": 31.5, "extra": 47.0, "complete": 79.5, "systems": ["ps4"]},
  "gravity_rush2": {"main": 20.0, "extra": 34.0, "complete": 53.5, "systems": ["ps4"]},
  "headlander": {"main": 5.5, "extra": 7.0, "complete": 8.0, "systems": ["ps4"]},
  "heavy_rain": {"main": 10.0, "extra": 12.0, "complete": 22.0, "systems": ["ps4"]},
  "hello_neighbor": {"main": 10.0, "extra": 16.0, "complete": 27.5, "systems": ["ps4"]},
  "hitman": {"main": 10.5, "extra": 27.5, "complete": 93.5, "systems": ["ps4"]},
  "hollow_knight": {"main": 23.0, "extra": 35.5, "complete": 49.0, "systems": ["ps4"]},
  "hotline_miami": {"main": 5.0, "extra": 7.0, "complete": 14.5, "systems": ["ps4", "vita"]},
  "hotline_miami2_wrong_number": {"main": 9.0, "extra": 12.5, "complete": 29.0, "systems": ["ps4", "vita"]},
  "hue": {"main": 4.5, "extra": 5.5, "complete": 6.0, "systems": ["vita"]},
  "human_fall_flat": {"main": 5.0, "extra": 10.0, "complete": 15.5, "systems": ["ps4"]},
  "i_am_bread": {"main": 2.5, "extra": 5.5, "complete": 13.5, "systems": ["ps4"]},
  "iconoclasts": {"main": 11.0, "extra": 13.0, "complete": 15.5, "systems": ["ps4", "vita"]},
  "in_famous_second_son": {"main": 10.0, "extra": 14.0, "complete": 20.0, "systems": ["ps4"]},
  "infinifactory": {"main": 36.5, "extra": 59.5, "complete": 90.5, "systems": ["ps4"]},
  "inside": {"main": 3.5, "extra": 4.0, "complete": 4.5, "systems": ["ps4"]},
  "invisible_inc": {"main": 7.5, "extra": 18.5, "complete": 56.5, "systems": ["ps4"]},
  "jotun": {"main": 5.5, "extra": 5.5, "complete": 6.5, "systems": ["ps4"]},
  "journey": {"main": 2.0, "extra": 2.5, "complete": 5.0, "systems": ["ps4"]},
  "just_cause3": {"main": 17.0, "extra": 34.0, "complete": 56.0, "systems": ["ps4"]},
  "killing_floor2": {"main": 12.5, "extra": 46.0, "complete": 136.0, "systems": ["ps4"]},
  "knack": {"main": 10.5, "extra": 11.5, "complete": 37.5, "systems": ["ps4"]},
  "lara_croft_go": {"main": 3.5, "extra": 5.5, "complete": 6.5, "systems": ["ps4", "vita"]},
  "lego_batman3_beyond_gotham": {"main": 10.5, "extra": 17.5, "complete": 36.0, "systems": ["vita"]},
  "life_is_strange2": {"main": 20.0, "extra": 20.0, "complete": 20.0, "systems": ["ps4"]},
  "linelight": {"main": 4.0, "extra": 7.0, "complete": 13.0, "systems": ["ps4"]},
  "mad_max2015": {"main": 19.5, "extra": 37.5, "complete": 61.0, "systems": ["ps4"]},
  "mafia_iii": {"main": 22.0, "extra": 32.5, "complete": 48.5, "systems": ["ps4"]},
  "mass_effect_andromeda": {"main": 19.0, "extra": 64.0, "complete": 93.0, "systems": ["ps4"]},
  "mega_man11": {"main": 4.5, "extra": 5.0, "complete": 12.0, "systems": ["ps4"]},
  "mega_man_legacy_collection": {"main": 21.0, "extra": 21.0, "complete": 21.0, "systems": ["ps4"]},
  "metal_gear_solid2_sonsof_liberty": {"main": 13.0, "extra": 15.0, "complete": 23.0, "systems": ["vita"]},
  "metal_gear_solid3_snake_eater": {"main": 16.0, "extra": 19.5, "complete": 22.5, "systems": ["vita"]},
  "mirrors_edge_catalyst": {"main": 8.5, "extra": 13.0, "complete": 36.0, "systems": ["ps4"]},
  "moonlighter": {"main": 13.5, "extra": 20.0, "complete": 24.5, "systems": ["ps4"]},
  "ms_pac_man": {"main": 1.0, "extra": 2.0, "complete": 2.0, "systems": ["ps4"]},
  "never_alone": {"main": 3.0, "extra": 3.5, "complete": 4.0, "systems": ["ps4"]},
  "ninja_pizza_girl": {"main": 2.0, "extra": 4.5, "complete": 10.0, "systems": ["ps4"]},
  "okami_hd": {"main": 34.5, "extra": 42.5, "complete": 55.0, "systems": ["ps4"]},
  "onrush": {"main": 12.0, "extra": 14.0, "complete": 20.5, "systems": ["ps4"]},
  "overcooked": {"main": 7.5, "extra": 8.5, "complete": 11.5, "systems": ["ps4"]},
  "oxenfree": {"main": 4.5, "extra": 5.5, "complete": 13.0, "systems": ["ps4"]},
  "pac_man256": {"main": 10.5, "extra": 10.5, "complete": 10.5, "systems": ["ps4"]},
  "pac_man_championship_edition2": {"main": 4.5, "extra": 4.5, "complete": 4.5, "systems": ["ps4"]},
  "papers_please": {"main": 4.5, "extra": 8.0, "complete": 16.0, "systems": ["vita"]},
  "persona5": {"main": 96.0, "extra": 111.0, "complete": 170.0, "systems": ["ps4"]},
  "psychopass_mandatory_happiness": {"main": 6.0, "extra": 14.5, "complete": 28.0, "systems": ["vita"]},
  "qube_directors_cut": {"main": 3.0, "extra": 3.5, "complete": 6.5, "systems": ["ps4"]},
  "ratchet_clank2016": {"main": 10.0, "extra": 12.5, "complete": 20.5, "systems": ["ps4"]},
  "rayman_legends": {"main": 9.5, "extra": 15.5, "complete": 28.5, "systems": ["ps4"]},
  "rime": {"main": 5.5, "extra": 6.0, "complete": 9.5, "systems": ["ps4"]},
  "rocket_league": {"main": 4.0, "extra": 17.5, "complete": 33.0, "systems": ["ps4"]},
  "rogue_legacy": {"main": 16.5, "extra": 25.5, "complete": 38.0, "systems": ["ps4", "vita"]},
  "roundabout": {"main": 2.5, "extra": 4.0, "complete": 7.0, "systems": ["vita"]},
  "shadow_warrior2013": {"main": 12.5, "extra": 15.0, "complete": 35.5, "systems": ["ps4"]},
  "sherlock_holmes_crimesand_punishments": {"main": 12.5, "extra": 14.5, "complete": 14.5, "systems": ["ps4"]},
  "sniper_elite4": {"main": 10.0, "extra": 16.0, "complete": 34.5, "systems": ["ps4"]},
  "soma": {"main": 9.0, "extra": 10.5, "complete": 11.0, "systems": ["ps4"]},
  "songofthe_deep": {"main": 6.5, "extra": 9.0, "complete": 11.5, "systems": ["ps4"]},
  "sonic_mania": {"main": 5.5, "extra": 8.5, "complete": 19.0, "systems": ["ps4"]},
  "space_hulk": {"main": 10.0, "extra": 16.5, "complete": 20.5, "systems": ["vita"]},
  "spelunky": {"main": 18.0, "extra": 41.0, "complete": 82.5, "systems": ["ps4", "vita"]},
  "squares2015": {"main": 2.0, "extra": 7.0, "complete": 45.0, "systems": ["vita"]},
  "star_wars_battlefront_ii2017": {"main": 6.0, "extra": 8.5, "complete": 30.0, "systems": ["ps4"]},
  "steam_world_dig": {"main": 5.0, "extra": 6.5, "complete": 8.0, "systems": ["ps4", "vita"]},
  "steam_world_dig2": {"main": 7.0, "extra": 10.0, "complete": 13.0, "systems": ["ps4", "vita"]},
  "steep": {"main": 11.5, "extra": 21.0, "complete": 36.0, "systems": ["ps4"]},
  "sundered": {"main": 13.0, "extra": 15.0, "complete": 17.0, "systems": ["ps4"]},
  "the_bridge": {"main": 4.0, "extra": 5.5, "complete": 7.5, "systems": ["ps4", "vita"]},
  "the_evil_within": {"main": 16.0, "extra": 19.0, "complete": 37.0, "systems": ["ps4"]},
  "the_evil_within2": {"main": 13.0, "extra": 18.5, "complete": 28.0, "systems": ["ps4"]},
  "the_flameinthe_flood": {"main": 9.5, "extra": 15.0, "complete": 25.5, "systems": ["ps4"]},
  "the_lastof_us_remastered": {"main": 14.5, "extra": 17.5, "complete": 25.0, "systems": ["ps4"]},
  "the_sexy_brutale": {"main": 6.0, "extra": 7.0, "complete": 8.5, "systems": ["ps4"]},
  "the_surge": {"main": 20.0, "extra": 28.5, "complete": 41.5, "systems": ["ps4"]},
  "the_swindle": {"main": 10.0, "extra": 21.0, "complete": 21.0, "systems": ["ps4", "vita"]},
  "the_talos_principle": {"main": 15.5, "extra": 20.5, "complete": 28.0, "systems": ["ps4"]},
  "the_witness": {"main": 17.5, "extra": 25.5, "complete": 45.0, "systems": ["ps4"]},
  "thief2014": {"main": 10.5, "extra": 22.0, "complete": 42.0, "systems": ["ps4"]},
  "thimbleweed_park": {"main": 10.5, "extra": 13.5, "complete": 14.5, "systems": ["ps4"]},
  "thisisthe_police": {"main": 18.5, "extra": 21.0, "complete": 25.5, "systems": ["ps4"]},
  "titanfall2": {"main": 6.0, "extra": 8.0, "complete": 13.5, "systems": ["ps4"]},
  "track_mania_turbo": {"main": 9.5, "extra": 26.0, "complete": 70.0, "systems": ["ps4"]},
  "transistor": {"main": 6.0, "extra": 8.5, "complete": 15.5, "systems": ["ps4"]},
  "trials_fusion": {"main": 6.5, "extra": 24.0, "complete": 87.0, "systems": ["ps4"]},
  "tropico5": {"main": 20.5, "extra": 39.5, "complete": 92.5, "systems": ["ps4"]},
  "uncanny_valley": {"main": 1.5, "extra": 2.5, "complete": 5.0, "systems": ["ps4", "vita"]},
  "unravel": {"main": 6.0, "extra": 7.5, "complete": 12.0, "systems": ["ps4"]},
  "until_dawn": {"main": 8.0, "extra": 9.0, "complete": 18.0, "systems": ["ps4"]},
  "until_dawn_rushof_blood": {"main": 2.0, "extra": 3.5, "complete": 3.5, "systems": ["ps4"]},
  "va11_hall_a_cyberpunk_bartender_action": {"main": 10.5, "extra": 13.0, "complete": 18.0, "systems": ["vita"]},
  "valiant_hearts_the_great_war": {"main": 6.5, "extra": 7.5, "complete": 9.0, "systems": ["ps4"]},
  "wanted_corp": {"main": 4.0, "extra": 4.5, "complete": 4.5, "systems": ["vita"]},
  "wizardof_legend": {"main": 6.0, "extra": 15.5, "complete": 20.5, "systems": ["ps4"]},
  "worms_battlegrounds": {"main": 13.0, "extra": 16.5, "complete": 16.5, "systems": ["ps4"]},
  "xcom2": {"main": 31.0, "extra": 43.5, "complete": 73.0, "systems": ["ps4"]},
  "yakuza0": {"main": 31.0, "extra": 65.5, "complete": 133.0, "systems": ["ps4"]},
  "yakuza_kiwami": {"main": 18.0, "extra": 32.5, "complete": 84.0, "systems": ["ps4"]},
  "zero_time_dilemma": {"main": 21.0, "extra": 21.5, "complete": 22.0, "systems": ["ps4"]}
};

var sort_games = function(time) {
  return Object.values(games).filter(function(game) {
    return game[time] > 0.0;
  }).sort(function(a, b) {
    return a[time] - b[time];
  });
};

var system_image = function(system_name) {
  var img = document.createElement('img');

  img.setAttribute('src', 'images/' + system_name + '.svg');

  return img;
};

var build_game_node = function(container, game, time) {
  empty_node(container);

  container.appendChild(document.createTextNode(game['title']));

  game['systems'].forEach(function(system) { container.appendChild(system_image(system)); });

  var hours = document.createElement('i');

  hours.appendChild(document.createTextNode(' (' + game[time] + ' hours)'));

  container.appendChild(hours);
};

var build_top_n_section = function(time, header_text, games_list) {
  var container = document.createElement('div');
  container.className = "col-md text-center";

  var header = document.createElement('h3');
  header.appendChild(document.createTextNode(header_text));

  container.appendChild(header);

  var list = document.createElement('ol');

  games_list.forEach(function(game) {
    var list_item = document.createElement('li');

    build_game_node(list_item, game, time);
    
    list.appendChild(list_item);
  });

  container.appendChild(list);

  return container;
};

var empty_node = function(el) {
  while(el.firstChild) {
    el.removeChild(el.firstChild);
  }
};

var cleanup_ui = function() {
  empty_node(document.getElementById('summary'));
  empty_node(document.getElementById('summary_time'));

  document.querySelectorAll('#games_to_play div').forEach(empty_node);
};

var update_ui = function(time, time_text, top_n) {
  cleanup_ui();

  var sorted_games = sort_games(time);
  var total_hours = sorted_games.reduce(function(sum, game){ return sum + game[time]; }, 0);

  var summary_time = document.getElementById('summary_time');
  summary_time.appendChild(document.createTextNode("That's " + total_hours + " total hours of gaming to look forward to."));

  var shortest = sorted_games.slice(0, top_n);
  var longest = sorted_games.slice(-top_n).reverse();

  document.querySelectorAll('#games_to_play div').forEach(function(node) {
    var game = games[node.getAttribute('id')];

    build_game_node(node, game, time);
  });

  var shortest_section = build_top_n_section(time, "Shortest " + top_n + " games (" + time_text + ")", shortest) 
  var longest_section = build_top_n_section(time, "Longest " + top_n + " games (" + time_text + ")", longest) 

  var summary = document.getElementById('summary');
  summary.appendChild(shortest_section);
  summary.appendChild(longest_section);
};

var main = function() {
  // Add title from HTML to games array, plus key
  Object.keys(games).forEach(function(key) {
    games[key]['key'] = key;
    games[key]['title'] = document.getElementById(key).textContent;
  });

  document.querySelectorAll('#summary_controls button').forEach(function(button) {
    button.addEventListener('click', function(){
      update_ui(button.getAttribute('data-time'), button.innerText, 3)
    });
  });

  var first_button = document.querySelector('#summary_controls button');
  update_ui(first_button.getAttribute('data-time'), first_button.innerText, 3);
};

main();
