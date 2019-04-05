const games = {
  "2064_read_only_memories": {"main": 9.0, "extra": 10.5, "complete": 17.5, "average" : 0.0, "systems": ["vita"]},
  "99_vidas": {"average": 15, "complete": 27.5, "extra": 27.5, "main": 2.5, "systems": ["ps4", "vita"]},
  "absolver": {"main": 5.0, "extra": 6.0, "complete": 0.0, "average": 0.0, "systems": ["ps4"]},
  "adr1ft": {"average": 5, "complete": 7, "extra": 5.5, "main": 4.5, "systems": ["ps4"]},
  "conan_exiles": {"main": 0.0, "extra": 100.0, "complete": 208.0, "average": 0.0, "systems": ["ps4"]},
  "the_surge": {"main": 19.5, "extra": 28.0, "complete": 43.0, "average": 0.0, "systems": ["ps4"]},
  "amnesia_a_machine_for_pigs": {"average": 4.5, "complete": 6, "extra": 5, "main": 4, "systems": ["ps4"]},
  "amnesia_the_dark_descent": {"average": 8, "complete": 10, "extra": 9, "main": 8, "systems": ["ps4"]},
  "another_world20th_anniversary": {"main": 2.5, "extra": 0.0, "complete": 0.0, "average": 0.0, "systems": ["vita"]},
  "aragami": {"main": 6.5, "extra": 10.0, "complete": 20.5, "average": 0.0, "systems" : ["ps4"]},
  "assassins_creed_chronicles_china": {"average": 7.5, "complete": 17, "extra": 9.5, "main": 6, "systems": ["ps4"]},
  "assassins_creed_chronicles_india": {"average": 6.5, "complete": 9.5, "extra": 7, "main": 6, "systems": ["ps4"]},
  "assassins_creed_chronicles_russia": {"average": 7, "complete": 11.5, "extra": 8, "main": 6, "systems": ["ps4"]},
  "assassins_creed_odyssey": {"main": 38.0, "extra": 71.0, "complete": 111.0, "average": 0.0, "systems": ["ps4"]},
  "assassins_creed_syndicate": {"average": 31.5, "complete": 51.5, "extra": 32, "main": 17.5, "systems": ["ps4"]},
  "beyond_two_souls": {"average": 11.5, "complete": 27, "extra": 12, "main": 10.5, "systems": ["ps4"]},
  "bloodborne": {"average": 48, "complete": 77, "extra": 45, "main": 35, "systems": ["ps4"]},
  "broken_sword_5_the_serpents_curse": {"average": 12, "complete": 14.5, "extra": 12.5, "main": 10.5, "systems": ["vita"]},
  "callof_duty_black_ops_iii": {"main": 9.0, "extra": 13.5, "complete": 45.0, "average": 11.5, "systems": ["ps4"]},
  "callof_duty_modern_warfare_remastered": {"main": 6.0, "extra": 7.5, "complete": 15.5, "average": 0.0, "systems": ["ps4"]},
  "childof_light": {"main": 11.0, "extra": 13.5, "complete": 15.5, "average": 13.0, "systems": ["ps4"]},
  "claire": {"average": 3.5, "complete": 6.5, "extra": 5, "main": 3.5, "systems": ["ps4", "vita"]},
  "crypt_of_the_necrodancer": {"average": 19, "complete": 38.5, "extra": 21.5, "main": 14.5, "systems": ["ps4", "vita"]},
  "darkest_dungeon": {"average": 72.5, "complete": 103, "extra": 79.5, "main": 51, "systems": ["ps4", "vita"]},
  "darksiders_ii_deathinitive_edition": {"average": 25, "complete": 43.5, "extra": 28.5, "main": 20, "systems": ["ps4"]},
  "day_of_the_tentacle_remastered": {"average": 5, "complete": 6, "extra": 5.5, "main": 4.5, "systems": ["ps4", "vita"]},
  "dear_esther": {"average": 1.5, "complete": 1.5, "extra": 1.5, "main": 1.5, "systems": ["ps4"]},
  "destiny2": {"main": 12.0, "extra": 24.0, "complete": 82.5, "average": 0.0, "systems": ["ps4"]},
  "detroit_become_human": {"main": 11.5, "extra": 13.5, "complete": 28.5, "average": 0.0, "systems": ["ps4"]},
  "deus_ex_mankind_divided": {"average": 29.5, "complete": 44, "extra": 30.5, "main": 15, "systems": ["ps4"]},
  "downwell": {"average": 10, "complete": 16, "extra": 12, "main": 8, "systems": ["vita"]},
  "dragon_age_inquisition": {"average": 88, "complete": 127, "extra": 87.5, "main": 45.5, "systems": ["ps4"]},
  "everybodys_gone_to_the_rapture": {"average": 5.5, "complete": 9, "extra": 6, "main": 5, "systems": ["ps4"]},
  "fallen_legion_flamesof_rebellion": {"main": 7.0, "extra": 0.0, "complete": 0.0, "average": 0.0, "systems": ["ps4", "vita"]},
  "final_fantasy_6": {"average": 41, "complete": 66, "extra": 40.5, "main": 35.5, "systems": ["vita"]},
  "final_fantasy_7": {"average": 54.5, "complete": 89, "extra": 56.5, "main": 38.5, "systems": ["ps4"]},
  "for_honor": {"main": 7.0, "extra": 9.0, "complete": 14.5, "average": 0.0, "systems": ["ps4"]},
  "forma8": {"average": 6.5, "complete": 7, "extra": 6, "main": 6, "systems": ["ps4", "vita"]},
  "foul_play": {"main": 4.5, "extra": 5.0, "complete": 0.0, "average": 0.0, "systems": ["vita"]},
  "furmins": {"average": 0, "complete": 0, "extra": 0, "main": 0, "systems": ["ps4", "vita"]},
  "godof_war_iii": {"main": 9.5, "extra": 10.5, "complete": 17.0, "average": 0.0, "systems": ["ps4"]},
  "grand_kingdom": {"average": 29, "complete": 51, "extra": 51, "main": 23.5, "systems": ["ps4"]},
  "grand_theft_auto_v": {"main": 31.0, "extra": 46.5, "complete": 78.5, "average": 0.0, "systems": ["ps4"]},
  "gravity_rush_2": {"average": 33.5, "complete": 56.5, "extra": 34.5, "main": 20.5, "systems": ["ps4"]},
  "headlander": {"average": 7.5, "complete": 8, "extra": 7, "main": 5.5, "systems": ["ps4"]},
  "heavy_rain": {"main": 10.0, "extra": 12.0, "complete": 21.0, "average": 10.5, "systems": ["ps4"]},
  "hello_neighbor": {"main": 7.5, "extra": 15.0, "complete": 16.0, "average": 0.0, "systems": ["ps4"]},
  "hitman": {"average": 16, "complete": 84.5, "extra": 25.5, "main": 10, "systems": ["ps4"]},
  "hollow_knight": {"main": 20.5, "extra": 31.0, "complete": 44.5, "average": 0.0, "systems": ["ps4"]},
  "hotline_miami": {"average": 6.5, "complete": 14.5, "extra": 7, "main": 5, "systems": ["ps4", "vita"]},
  "hotline_miami_2_wrong_number": {"average": 9.5, "complete": 29, "extra": 12.5, "main": 9, "systems": ["ps4", "vita"]},
  "hue": {"average": 4.5, "complete": 5.5, "extra": 5, "main": 4, "systems": ["vita"]},
  "human_fall_flat": {"average": 6.5, "complete": 15, "extra": 8, "main": 5, "systems": ["ps4"]},
  "i_am_bread": {"average": 3, "complete": 11, "extra": 5, "main": 2, "systems": ["ps4"]},
  "iconoclasts": {"main": 11.0, "extra": 13.0, "complete": 14.5, "average": 0.0, "systems": ["ps4", "vita"]},
  "infamous_second_son": {"average": 14.5, "complete": 20, "extra": 14, "main": 10, "systems": ["ps4"]},
  "infinifactory": {"average": 43.5, "complete": 72.5, "extra": 52.5, "main": 38, "systems": ["ps4"]},
  "inside": {"average": 4, "complete": 4.5, "extra": 4, "main": 3.5, "systems": ["ps4"]},
  "invisible_inc": {"average": 10.5, "complete": 62.5, "extra": 20, "main": 7.5, "systems": ["ps4"]},
  "jotun": {"average": 5.5, "complete": 6.5, "extra": 5.5, "main": 5.5, "systems": ["ps4"]},
  "journey": {"average": 2, "complete": 5, "extra": 2.5, "main": 2, "systems": ["ps4"]},
  "just_cause_3": {"average": 31.5, "complete": 57.5, "extra": 33, "main": 17, "systems": ["ps4"]},
  "killing_floor_2": {"average": 50, "complete": 112, "extra": 36.5, "main": 12.5, "systems": ["ps4"]},
  "knack": {"average": 11.5, "complete": 37.5, "extra": 11.5, "main": 10.5, "systems": ["ps4"]},
  "lara_croft_go": {"main": 3.5, "extra": 5.5, "complete": 6.5, "average": 5.5, "systems": ["ps4", "vita"]},
  "lego_batman3_beyond_gotham": {"main": 10.5, "extra": 17.5, "complete": 36.0, "average": 0.0, "systems": ["vita"]},
  "life_is_strange2": {"main": 0.0, "extra": 0.0, "complete": 0.0, "average": 0.0, "systems": ["ps4"]},
  "linelight": {"average": 8, "complete": 11.5, "extra": 8.5, "main": 4, "systems": ["ps4"]},
  "mad_max_2015": {"average": 37.5, "complete": 60.5, "extra": 37.5, "main": 19, "systems": ["ps4"]},
  "mafia_iii": {"main": 21.5, "extra": 32.0, "complete": 46.5, "average": 0.0, "systems": ["ps4"]},
  "mass_effect_andromeda": {"average": 65.5, "complete": 92, "extra": 63.5, "main": 19.5, "systems": ["ps4"]},
  "mega_man11": {"main": 4.5, "extra": 5.0, "complete": 8.0, "average": 0.0, "systems": ["ps4"]},
  "mega_man_legacy_collection": {"average": 24.5, "complete": 24.5, "extra": 24.5, "main": 24.5, "systems": ["ps4"]},
  "metal_gear_solid_2_sons_of_liberty": {"average": 13.5, "complete": 22, "extra": 14.5, "main": 13, "systems": ["vita"]},
  "metal_gear_solid_3_snake_eater": {"average": 16.5, "complete": 22, "extra": 19, "main": 16, "systems": ["vita"]},
  "mirrors_edge_catalyst": {"average": 11.5, "complete": 36.5, "extra": 13, "main": 8.5, "systems": ["ps4"]},
  "moonlighter": {"main": 13.0, "extra": 19.0, "complete": 24.0, "average": 0.0, "systems": ["ps4"]},
  "ms_pac_man": {"average": 1.5, "complete": 2.5, "extra": 2, "main": 1, "systems": ["ps4"]},
  "never_alone": {"average": 3.5, "complete": 4, "extra": 3.5, "main": 3, "systems": ["ps4"]},
  "ninja_pizza_girl": {"average": 2, "complete": 7.5, "extra": 6, "main": 2, "systems": ["ps4"]},
  "okami_hd": {"average": 42.5, "complete": 55.5, "extra": 44, "main": 36.5, "systems": ["ps4"]},
  "onrush": {"main": 12.5, "extra": 16.0, "complete": 30.0, "average": 0.0, "systems": ["ps4"]},
  "oxenfree": {"average": 5, "complete": 13, "extra": 5.5, "main": 4, "systems": ["ps4"]},
  "pac_man_256": {"average": 9.5, "complete": 9.5, "extra": 9.5, "main": 9.5, "systems": ["ps4"]},
  "pac_man_championship_edition_2": {"average": 4, "complete": 4, "extra": 4, "main": 4, "systems": ["ps4"]},
  "papers_please": {"main": 4.5, "extra": 8.0, "complete": 16.0, "average": 0.0, "systems": ["vita"]},
  "persona_5": {"average": 108, "complete": 164, "extra": 111, "main": 95.5, "systems": ["ps4"]},
  "psychopass_mandatory_happiness": {"average": 11.5, "complete": 29.5, "extra": 17.5, "main": 6, "systems": ["vita"]},
  "qube_directors_cut": {"main": 3.0, "extra": 3.5, "complete": 6.5, "average": 0.0, "systems": ["ps4"]},
  "ratchet_clank_2016": {"average": 12.5, "complete": 20.5, "extra": 12.5, "main": 10, "systems": ["ps4"]},
  "rayman_legends": {"average": 14, "complete": 27.5, "extra": 15, "main": 9.5, "systems": ["ps4"]},
  "rime": {"average": 6, "complete": 9.5, "extra": 6.5, "main": 5.5, "systems": ["ps4"]},
  "rocket_league": {"average": 13.5, "complete": 29.5, "extra": 12, "main": 4, "systems": ["ps4"]},
  "rogue_legacy": {"main": 16.5, "extra": 26.0, "complete": 37.5, "average": 0.0, "systems": ["ps4", "vita"]},
  "roundabout": {"main": 2.5, "extra": 4.0, "complete": 7.0, "average": 0.0, "systems": ["vita"]},
  "shadow_warrior": {"average": 12, "complete": 14.5, "extra": 12, "main": 11, "systems": ["ps4"]},
  "sherlock_holmes_crimes_and_punishments": {"average": 13.5, "complete": 14.5, "extra": 14, "main": 12, "systems": ["ps4"]},
  "sniper_elite_4": {"average": 14, "complete": 27, "extra": 15, "main": 10, "systems": ["ps4"]},
  "soma": {"average": 10, "complete": 11.5, "extra": 10.5, "main": 9, "systems": ["ps4"]},
  "song_of_the_deep": {"average": 8, "complete": 10.5, "extra": 8, "main": 6, "systems": ["ps4"]},
  "space_hulk": {"main": 10.0, "extra": 16.5, "complete": 20.5, "average": 0.0, "systems": ["vita"]},
  "spelunky": {"main": 18.0, "extra": 39.5, "complete": 81.0, "average": 0.0, "systems": ["ps4", "vita"]},
  "squares": {"average": 0, "complete": 0, "extra": 0, "main": 0, "systems": ["vita"]},
  "star_wars_battlefront_ii2017": {"main": 6.0, "extra": 7.5, "complete": 37.0, "average": 0.0, "systems": ["ps4"]},
  "steam_world_dig": {"average": 6, "complete": 8, "extra": 6.5, "main": 5, "systems": ["ps4", "vita"]},
  "steam_world_dig2": {"main": 7.0, "extra": 10.0, "complete": 13.5, "average": 0.0, "systems": ["ps4", "vita"]},
  "steep": {"main": 11.0, "extra": 24.5, "complete": 36.0, "average": 0.0, "systems": ["ps4"]},
  "sundered": {"main": 13.0, "extra": 15.0, "complete": 17.0, "average": 0.0, "systems": ["ps4"]},
  "the_bridge": {"average": 5, "complete": 7, "extra": 5.5, "main": 4, "systems": ["ps4", "vita"]},
  "the_evil_within": {"average": 17, "complete": 33.5, "extra": 19, "main": 16, "systems": ["ps4"]},
  "the_evil_within_2": {"average": 17.5, "complete": 28, "extra": 18, "main": 13.5, "systems": ["ps4"]},
  "the_flame_in_the_flood": {"average": 12, "complete": 24.5, "extra": 15, "main": 9.5, "systems": ["ps4"]},
  "the_lastof_us_remastered": {"main": 14.5, "extra": 17.5, "complete": 27.5, "average": 0.0, "systems": ["ps4"]},
  "the_sexy_brutale": {"main": 6.0, "extra": 7.0, "complete": 8.5, "average": 0.0, "systems": ["ps4"]},
  "the_swindle": {"average": 21, "complete": 23.5, "extra": 23.5, "main": 10, "systems": ["ps4", "vita"]},
  "the_talos_principle": {"average": 20.5, "complete": 27, "extra": 20, "main": 15.5, "systems": ["ps4"]},
  "the_witness": {"average": 23.5, "complete": 46.5, "extra": 25.5, "main": 17.5, "systems": ["ps4"]},
  "thief": {"average": 17, "complete": 42.5, "extra": 22, "main": 10.5, "systems": ["ps4"]},
  "thimbleweed_park": {"average": 12.5, "complete": 14.5, "extra": 14, "main": 10.5, "systems": ["ps4"]},
  "this_is_the_police": {"average": 20, "complete": 23.5, "extra": 20.5, "main": 18.5, "systems": ["ps4"]},
  "titanfall_2": {"average": 6.5, "complete": 13, "extra": 8, "main": 6, "systems": ["ps4"]},
  "track_mania_turbo": {"average": 14, "complete": 26, "extra": 26, "main": 9.5, "systems": ["ps4"]},
  "transistor": {"average": 7.5, "complete": 15.5, "extra": 8, "main": 6, "systems": ["ps4"]},
  "trials_fusion": {"average": 11.5, "complete": 92, "extra": 27, "main": 6.5, "systems": ["ps4"]},
  "tropico_5": {"average": 25.5, "complete": 71, "extra": 28, "main": 20.5, "systems": ["ps4"]},
  "uncanny_valley": {"average": 2, "complete": 6, "extra": 2.5, "main": 2, "systems": ["ps4", "vita"]},
  "uncharted_4_a_thiefs_end": {"average": 16, "complete": 27.5, "extra": 17.5, "main": 15, "systems": ["ps4"]},
  "uncharted_the_nathan_drake_collection": {"average": 29.5, "complete": 61, "extra": 31, "main": 27, "systems": ["ps4"]},
  "unravel": {"average": 7, "complete": 11.5, "extra": 7.5, "main": 6, "systems": ["vita"]},
  "until_dawn": {"average": 8.5, "complete": 18, "extra": 9, "main": 8, "systems": ["ps4"]},
  "until_dawn_rush_of_blood": {"average": 2.5, "complete": 5, "extra": 5, "main": 2, "systems": ["ps4"]},
  "va11_hall_a_cyberpunk_bartender_action": {"main": 10.5, "extra": 13.0, "complete": 18.0, "average": 0.0, "systems": ["vita"]},
  "valiant_hearts_the_great_war": {"main": 6.5, "extra": 7.5, "complete": 9.0, "average": 7.0, "systems": ["ps4"]},
  "wanted_corp": {"average": 4.5, "complete": 4.5, "extra": 4.5, "main": 4, "systems": ["vita"]},
  "wizard_of_legend": {"average": 0, "complete": 0, "extra": 0, "main": 0, "systems": ["ps4"]},
  "worms_battlegrounds": {"average": 19, "complete": 21, "extra": 21, "main": 14.5, "systems": ["ps4"]},
  "xcom_2": {"average": 40.5, "complete": 71, "extra": 42.5, "main": 30.5, "systems": ["ps4"]},
  "yakuza0": {"main": 31.0, "extra": 64.0, "complete": 137.0, "average": 57.5, "systems": ["ps4"]},
  "yakuza_kiwami": {"main": 17.5, "extra": 32.0, "complete": 88.0, "average": 0.0, "systems": ["ps4"]},
  "zero_escape_zero_time_dilemma": {"average": 22, "complete": 22, "extra": 21.5, "main": 21.5, "systems": ["ps4"]}
}

var sort_games = function(time) {
  var list = $.map(games, function(k, v){
    k['title'] = v;

    return k;
  });

  return $(list).filter(function(i, game){
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
    var title = $("#" + game['title']).text()
    var contents = $("<h4/>").text(title);
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

  $("#games_to_play div").each(function(){ update_list_item(this, time) });
  $("#summary").append($("<h2/>").text("That's " + total_hours + " total hours of gaming to look forward to."));
  $("#summary").append(build_top_games_element(time, "Shortest " + top_n + " games (" + time_text + ")", shortest));
  $("#summary").append(build_top_games_element(time, "Longest " + top_n + " games (" + time_text + ")", longest));
};

var update_list_item = function(el, time) {
  var item = $(el);
  var title = item.attr('id');
  var game = games[title];
  var game_time = game[time];

  item.children("i, img").remove();

  $.each(games[title]['systems'], function(i, system) {
    var img = $("<img/>").attr({src: "images/" + system + ".svg"});
    item.append(img);
  });

  item.append($("<i/>").text(" (" + game_time + " hours)"));
};

var main = function() {
  $("#summary_controls li").click(function() {
    var button = $(this);

    update_ui(button.data('time'), button.text(), 3);
  });

  $("#summary_controls li:first").click();
};

main();
