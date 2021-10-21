const all_games = [
  {
    "id": "_1979_revolution_black_friday",
    "times": {
      "main": 2,
      "extra": 3,
      "complete": 4.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "1979 Revolution: Black Friday"
  },
  {
    "id": "_2064_read_only_memories",
    "times": {
      "main": 9,
      "extra": 10.5,
      "complete": 17.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": false,
    "vita": true,
    "title": "2064: Read Only Memories"
  },
  {
    "id": "_99_vidas",
    "times": {
      "main": 3,
      "extra": 3,
      "complete": 3
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": true,
    "title": "99Vidas"
  },
  {
    "id": "a_way_out",
    "times": {
      "main": 6,
      "extra": 6,
      "complete": 7
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "A Way Out"
  },
  {
    "id": "absolver",
    "times": {
      "main": 5,
      "extra": 7,
      "complete": 30
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Absolver"
  },
  {
    "id": "adr1_ft",
    "times": {
      "main": 4.5,
      "extra": 6,
      "complete": 8.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "ADR1FT"
  },
  {
    "id": "amnesia_a_machinefor_pigs",
    "times": {
      "main": 4,
      "extra": 5,
      "complete": 6.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Amnesia: A Machine for Pigs"
  },
  {
    "id": "amnesia_the_dark_descent",
    "times": {
      "main": 8,
      "extra": 9,
      "complete": 10.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Amnesia: The Dark Descent"
  },
  {
    "id": "another_world20th_anniversary",
    "times": {
      "main": 2.5,
      "extra": 2.5,
      "complete": 2.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": false,
    "vita": true,
    "title": "Another World: 20th Anniversary"
  },
  {
    "id": "aragami",
    "times": {
      "main": 6.5,
      "extra": 10,
      "complete": 18.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Aragami"
  },
  {
    "id": "assassins_creed_chronicles_china",
    "times": {
      "main": 6,
      "extra": 9.5,
      "complete": 17
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Assassin's Creed Chronicles: China"
  },
  {
    "id": "assassins_creed_chronicles_india",
    "times": {
      "main": 5.5,
      "extra": 7,
      "complete": 15.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Assassin's Creed Chronicles: India"
  },
  {
    "id": "assassins_creed_chronicles_russia",
    "times": {
      "main": 6.5,
      "extra": 9,
      "complete": 14.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Assassin's Creed Chronicles: Russia"
  },
  {
    "id": "beyond_two_souls",
    "times": {
      "main": 10.5,
      "extra": 12,
      "complete": 27
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Beyond: Two Souls"
  },
  {
    "id": "bloodborne",
    "times": {
      "main": 35,
      "extra": 45.5,
      "complete": 77.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Bloodborne"
  },
  {
    "id": "borderlands3",
    "times": {
      "main": 22.5,
      "extra": 39.5,
      "complete": 62
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "vita": false,
    "title": "Borderlands 3"
  },
  {
    "id": "borderlands_the_handsome_collection",
    "times": {
      "main": 87,
      "extra": 120,
      "complete": 120
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": true,
    "vita": false,
    "title": "Borderlands: The Handsome Collection"
  },
  {
    "id": "broken_sword5_the_serpents_curse",
    "times": {
      "main": 11,
      "extra": 12,
      "complete": 14.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": false,
    "vita": true,
    "title": "Broken Sword 5: The Serpent's Curse"
  },
  {
    "id": "call_of_duty_black_ops_iii",
    "times": {
      "main": 9,
      "extra": 13.5,
      "complete": 48.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Call of Duty: Black Ops III"
  },
  {
    "id": "call_of_duty_modern_warfare2_remastered",
    "times": {
      "main": 5.5,
      "extra": 7.5,
      "complete": 15.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Call of Duty Modern Warfare 2  Remastered"
  },
  {
    "id": "call_of_duty_modern_warfare_remastered",
    "times": {
      "main": 6,
      "extra": 7.5,
      "complete": 16
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Call of Duty: Modern Warfare - Remastered"
  },
  {
    "id": "child_of_light",
    "times": {
      "main": 11,
      "extra": 13.5,
      "complete": 15.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Child of Light"
  },
  {
    "id": "cities_skylines",
    "times": {
      "main": 25.5,
      "extra": 51.5,
      "complete": 104
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Cities Skylines"
  },
  {
    "id": "claire",
    "times": {
      "main": 3,
      "extra": 3,
      "complete": 5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": true,
    "title": "Claire"
  },
  {
    "id": "crypt_of_the_necro_dancer",
    "times": {
      "main": 15,
      "extra": 23,
      "complete": 44
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": true,
    "title": "Crypt of the NecroDancer"
  },
  {
    "id": "darkest_dungeon",
    "times": {
      "main": 53,
      "extra": 79.5,
      "complete": 103
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": true,
    "title": "Darkest Dungeon"
  },
  {
    "id": "darksiders_ii_deathinitive_edition",
    "times": {
      "main": 20,
      "extra": 29,
      "complete": 46.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Darksiders II: Deathinitive Edition"
  },
  {
    "id": "darksiders_iii",
    "times": {
      "main": 14,
      "extra": 17.5,
      "complete": 25.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Darksiders III"
  },
  {
    "id": "day_of_the_tentacle_remastered",
    "times": {
      "main": 4.5,
      "extra": 5.5,
      "complete": 6
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": true,
    "title": "Day of the Tentacle: Remastered"
  },
  {
    "id": "destiny2",
    "times": {
      "main": 12,
      "extra": 24,
      "complete": 99
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Destiny 2"
  },
  {
    "id": "deus_ex_mankind_divided",
    "times": {
      "main": 15,
      "extra": 29.5,
      "complete": 46.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Deus Ex: Mankind Divided"
  },
  {
    "id": "dirt_rally_20",
    "times": {
      "main": 10.5,
      "extra": 48,
      "complete": 48
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Dirt Rally 2.0"
  },
  {
    "id": "doom_eternal",
    "times": {
      "main": 13.5,
      "extra": 18,
      "complete": 23.5
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "DOOM Eternal"
  },
  {
    "id": "downwell",
    "times": {
      "main": 8,
      "extra": 12,
      "complete": 15
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": false,
    "vita": true,
    "title": "Downwell"
  },
  {
    "id": "dragon_age_inquisition",
    "times": {
      "main": 46,
      "extra": 87.5,
      "complete": 127
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Dragon Age: Inquisition"
  },
  {
    "id": "erica",
    "times": {
      "main": 2,
      "extra": 3,
      "complete": 9.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Erica"
  },
  {
    "id": "everybodys_gone_to_the_rapture",
    "times": {
      "main": 4.5,
      "extra": 6,
      "complete": 9
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Everybody's Gone to the Rapture"
  },
  {
    "id": "fallen_legion_flames_of_rebellion",
    "times": {
      "main": 8,
      "extra": 8,
      "complete": 8
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": true,
    "title": "Fallen Legion: Flames of Rebellion"
  },
  {
    "id": "farming_simulator_19",
    "times": {
      "main": 187,
      "extra": 258,
      "complete": 698
    },
    "is_complete": false,
    "jettisoned": true,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Farming Simulator 19"
  },
  {
    "id": "final_fantasy_7",
    "times": {
      "main": 38.5,
      "extra": 55,
      "complete": 88.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Final Fantasy 7"
  },
  {
    "id": "final_fantasy_vi",
    "times": {
      "main": 35.5,
      "extra": 41,
      "complete": 63.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": false,
    "vita": true,
    "title": "Final Fantasy VI"
  },
  {
    "id": "for_honor",
    "times": {
      "main": 7,
      "extra": 9,
      "complete": 16
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "For Honor"
  },
  {
    "id": "forma8",
    "times": {
      "main": 6.5,
      "extra": 7,
      "complete": 7.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": true,
    "title": "Forma.8"
  },
  {
    "id": "foul_play",
    "times": {
      "main": 4.5,
      "extra": 4.5,
      "complete": 10
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": false,
    "vita": true,
    "title": "Foul Play"
  },
  {
    "id": "furmins",
    "times": {
      "main": 7,
      "extra": 7,
      "complete": 7
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": true,
    "title": "Furmins"
  },
  {
    "id": "genshin_impact",
    "times": {
      "main": 42,
      "extra": 86,
      "complete": 132
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Genshin Impact"
  },
  {
    "id": "ghost_of_tsushima",
    "times": {
      "main": 24,
      "extra": 42,
      "complete": 59
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Ghost of Tsushima"
  },
  {
    "id": "god_of_war_iii",
    "times": {
      "main": 10.5,
      "extra": 10.5,
      "complete": 10.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "God of War III"
  },
  {
    "id": "grand_kingdom",
    "times": {
      "main": 23,
      "extra": 65.5,
      "complete": 181
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Grand Kingdom"
  },
  {
    "id": "grand_theft_auto_v",
    "times": {
      "main": 31.5,
      "extra": 47,
      "complete": 79.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Grand Theft Auto V"
  },
  {
    "id": "gravity_ghost",
    "times": {
      "main": 3,
      "extra": 3,
      "complete": 3.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Gravity Ghost"
  },
  {
    "id": "gravity_rush_2",
    "times": {
      "main": 20,
      "extra": 34,
      "complete": 53.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Gravity Rush 2"
  },
  {
    "id": "greedfall",
    "times": {
      "main": 22,
      "extra": 40,
      "complete": 50
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Greedfall"
  },
  {
    "id": "headlander",
    "times": {
      "main": 5.5,
      "extra": 7,
      "complete": 8
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Headlander"
  },
  {
    "id": "heavy_rain",
    "times": {
      "main": 10,
      "extra": 12,
      "complete": 22
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Heavy Rain"
  },
  {
    "id": "hello_neighbor",
    "times": {
      "main": 10,
      "extra": 16,
      "complete": 27.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Hello Neighbor"
  },
  {
    "id": "hitman",
    "times": {
      "main": 10.5,
      "extra": 27.5,
      "complete": 93.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Hitman"
  },
  {
    "id": "hollow_knight",
    "times": {
      "main": 23,
      "extra": 35.5,
      "complete": 49
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Hollow Knight"
  },
  {
    "id": "hotline_miami",
    "times": {
      "main": 5,
      "extra": 7,
      "complete": 14.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": true,
    "title": "Hotline Miami"
  },
  {
    "id": "hotline_miami_2_wrong_number",
    "times": {
      "main": 9,
      "extra": 12.5,
      "complete": 29
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": true,
    "title": "Hotline Miami 2: Wrong Number"
  },
  {
    "id": "hue",
    "times": {
      "main": 4.5,
      "extra": 5.5,
      "complete": 6
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": false,
    "vita": true,
    "title": "HUE"
  },
  {
    "id": "human_fall_flat",
    "times": {
      "main": 5,
      "extra": 10,
      "complete": 15.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Human: Fall Flat"
  },
  {
    "id": "i_am_bread",
    "times": {
      "main": 2.5,
      "extra": 5.5,
      "complete": 13.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "I Am Bread"
  },
  {
    "id": "iconoclasts",
    "times": {
      "main": 11,
      "extra": 13,
      "complete": 15.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": true,
    "title": "Iconoclasts"
  },
  {
    "id": "in_famous_second_son",
    "times": {
      "main": 10,
      "extra": 14,
      "complete": 20
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "inFAMOUS: Second Son"
  },
  {
    "id": "infinifactory",
    "times": {
      "main": 36.5,
      "extra": 59.5,
      "complete": 90.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Infinifactory"
  },
  {
    "id": "inside",
    "times": {
      "main": 3.5,
      "extra": 4,
      "complete": 4.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Inside"
  },
  {
    "id": "invisible_inc",
    "times": {
      "main": 7.5,
      "extra": 18.5,
      "complete": 56.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Invisible, Inc."
  },
  {
    "id": "jotun",
    "times": {
      "main": 5.5,
      "extra": 5.5,
      "complete": 6.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Jotun"
  },
  {
    "id": "journey",
    "times": {
      "main": 2,
      "extra": 2.5,
      "complete": 5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Journey"
  },
  {
    "id": "just_cause_3",
    "times": {
      "main": 17,
      "extra": 34,
      "complete": 56
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Just Cause 3"
  },
  {
    "id": "just_cause_4",
    "times": {
      "main": 16,
      "extra": 26,
      "complete": 57.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Just Cause 4"
  },
  {
    "id": "killing_floor_2",
    "times": {
      "main": 12.5,
      "extra": 46,
      "complete": 136
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Killing Floor 2"
  },
  {
    "id": "knack",
    "times": {
      "main": 10.5,
      "extra": 11.5,
      "complete": 37.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Knack"
  },
  {
    "id": "lara_croft_go",
    "times": {
      "main": 3.5,
      "extra": 5.5,
      "complete": 6.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": true,
    "title": "Lara Croft GO"
  },
  {
    "id": "life_is_strange_2",
    "times": {
      "main": 20,
      "extra": 20,
      "complete": 20
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Life Is Strange 2"
  },
  {
    "id": "linelight",
    "times": {
      "main": 4,
      "extra": 7,
      "complete": 13
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Linelight"
  },
  {
    "id": "mad_max_2015",
    "times": {
      "main": 19.5,
      "extra": 37.5,
      "complete": 61
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Mad Max (2015)"
  },
  {
    "id": "mafia_iii",
    "times": {
      "main": 22,
      "extra": 32.5,
      "complete": 48.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Mafia III"
  },
  {
    "id": "mass_effect_andromeda",
    "times": {
      "main": 19,
      "extra": 64,
      "complete": 93
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Mass Effect: Andromeda"
  },
  {
    "id": "mega_man_11",
    "times": {
      "main": 4.5,
      "extra": 5,
      "complete": 12
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Mega Man 11"
  },
  {
    "id": "mega_man_legacy_collection",
    "times": {
      "main": 21,
      "extra": 21,
      "complete": 21
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Mega Man Legacy Collection"
  },
  {
    "id": "metal_gear_solid_2_sons_of_liberty",
    "times": {
      "main": 13,
      "extra": 15,
      "complete": 23
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": false,
    "vita": true,
    "title": "Metal Gear Solid 2: Sons of Liberty"
  },
  {
    "id": "metal_gear_solid_3_snake_eater",
    "times": {
      "main": 16,
      "extra": 19.5,
      "complete": 22.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": false,
    "vita": true,
    "title": "Metal Gear Solid 3: Snake Eater"
  },
  {
    "id": "metro_2033_redux",
    "times": {
      "main": 9,
      "extra": 11.5,
      "complete": 22.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Metro 2033 Redux"
  },
  {
    "id": "metro_last_light_redux",
    "times": {
      "main": 10,
      "extra": 13.5,
      "complete": 26
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Metro Last Light Redux"
  },
  {
    "id": "mirrors_edge_catalyst",
    "times": {
      "main": 8.5,
      "extra": 13,
      "complete": 36
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Mirror's Edge: Catalyst"
  },
  {
    "id": "moonlighter",
    "times": {
      "main": 13.5,
      "extra": 20,
      "complete": 24.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Moonlighter"
  },
  {
    "id": "ms_pac_man",
    "times": {
      "main": 1,
      "extra": 2,
      "complete": 2
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Ms. Pac-Man"
  },
  {
    "id": "nba_2k20",
    "times": {
      "main": 98,
      "extra": 98,
      "complete": 98
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "NBA 2K20"
  },
  {
    "id": "never_alone",
    "times": {
      "main": 3,
      "extra": 3.5,
      "complete": 4
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Never Alone"
  },
  {
    "id": "ninja_pizza_girl",
    "times": {
      "main": 2,
      "extra": 4.5,
      "complete": 10
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Ninja Pizza Girl"
  },
  {
    "id": "okami_hd",
    "times": {
      "main": 34.5,
      "extra": 42.5,
      "complete": 55
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Okami HD"
  },
  {
    "id": "onrush",
    "times": {
      "main": 12,
      "extra": 14,
      "complete": 20.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Onrush"
  },
  {
    "id": "overcooked",
    "times": {
      "main": 7.5,
      "extra": 8.5,
      "complete": 11.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Overcooked"
  },
  {
    "id": "oxenfree",
    "times": {
      "main": 4.5,
      "extra": 5.5,
      "complete": 13
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Oxenfree"
  },
  {
    "id": "pac_man_256",
    "times": {
      "main": 10.5,
      "extra": 10.5,
      "complete": 10.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Pac-Man 256"
  },
  {
    "id": "pac_man_championship_edition_2",
    "times": {
      "main": 4.5,
      "extra": 4.5,
      "complete": 4.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Pac-Man Championship Edition 2"
  },
  {
    "id": "papers_please",
    "times": {
      "main": 4.5,
      "extra": 8,
      "complete": 16
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": false,
    "vita": true,
    "title": "Papers, Please"
  },
  {
    "id": "persona_5",
    "times": {
      "main": 96,
      "extra": 111,
      "complete": 170
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Persona 5"
  },
  {
    "id": "prototype",
    "times": {
      "main": 11,
      "extra": 17.5,
      "complete": 31.5
    },
    "is_complete": false,
    "jettisoned": true,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Prototype"
  },
  {
    "id": "prototype_2",
    "times": {
      "main": 10,
      "extra": 14,
      "complete": 18.5
    },
    "is_complete": false,
    "jettisoned": true,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Prototype 2"
  },
  {
    "id": "psychopass_mandatory_happiness",
    "times": {
      "main": 6,
      "extra": 14.5,
      "complete": 28
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": false,
    "vita": true,
    "title": "PSYCHO-PASS: Mandatory Happiness"
  },
  {
    "id": "qube_directors_cut",
    "times": {
      "main": 3,
      "extra": 3.5,
      "complete": 6.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Q.U.B.E.: Director's Cut"
  },
  {
    "id": "ratchet_clank_2016",
    "times": {
      "main": 10,
      "extra": 12.5,
      "complete": 20.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Ratchet & Clank (2016)"
  },
  {
    "id": "rayman_legends",
    "times": {
      "main": 9.5,
      "extra": 15.5,
      "complete": 28.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Rayman Legends"
  },
  {
    "id": "rime",
    "times": {
      "main": 5.5,
      "extra": 6,
      "complete": 9.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Rime"
  },
  {
    "id": "rise_of_the_tomb_raider",
    "times": {
      "main": 13.5,
      "extra": 21.5,
      "complete": 34.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": true,
    "ps4": true,
    "vita": false,
    "title": "Rise of the Tomb Raider"
  },
  {
    "id": "rocket_league",
    "times": {
      "main": 4,
      "extra": 17.5,
      "complete": 33
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Rocket League"
  },
  {
    "id": "rogue_legacy",
    "times": {
      "main": 16.5,
      "extra": 25.5,
      "complete": 38
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": true,
    "title": "Rogue Legacy"
  },
  {
    "id": "roundabout",
    "times": {
      "main": 2.5,
      "extra": 4,
      "complete": 7
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": false,
    "vita": true,
    "title": "Roundabout"
  },
  {
    "id": "shadow_of_the_tomb_raider",
    "times": {
      "main": 12.5,
      "extra": 22.5,
      "complete": 36
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Shadow of the Tomb Raider"
  },
  {
    "id": "shadow_warrior_2013",
    "times": {
      "main": 12.5,
      "extra": 15,
      "complete": 35.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Shadow Warrior (2013)"
  },
  {
    "id": "sherlock_holmes_crimes_and_punishments",
    "times": {
      "main": 12.5,
      "extra": 14.5,
      "complete": 14.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Sherlock Holmes: Crimes and Punishments"
  },
  {
    "id": "sniper_elite_4",
    "times": {
      "main": 10,
      "extra": 16,
      "complete": 34.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Sniper Elite 4"
  },
  {
    "id": "soma",
    "times": {
      "main": 9,
      "extra": 10.5,
      "complete": 11
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Soma"
  },
  {
    "id": "song_of_the_deep",
    "times": {
      "main": 6.5,
      "extra": 9,
      "complete": 11.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Song of the Deep"
  },
  {
    "id": "sonic_forces",
    "times": {
      "main": 4,
      "extra": 6,
      "complete": 23.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Sonic Forces"
  },
  {
    "id": "sonic_mania",
    "times": {
      "main": 5.5,
      "extra": 8.5,
      "complete": 19
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Sonic Mania"
  },
  {
    "id": "space_hulk",
    "times": {
      "main": 10,
      "extra": 16.5,
      "complete": 20.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": false,
    "vita": true,
    "title": "Space Hulk"
  },
  {
    "id": "spelunky",
    "times": {
      "main": 18,
      "extra": 41,
      "complete": 82.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": true,
    "title": "Spelunky"
  },
  {
    "id": "squares_2015",
    "times": {
      "main": 2,
      "extra": 7,
      "complete": 45
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": false,
    "vita": true,
    "title": "Squares (2015)"
  },
  {
    "id": "star_wars_squadrons",
    "times": {
      "main": 8.5,
      "extra": 13.5,
      "complete": 20.5
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Star Wars Squadrons"
  },
  {
    "id": "steamworld_dig",
    "times": {
      "main": 5,
      "extra": 6.5,
      "complete": 8
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": true,
    "title": "SteamWorld Dig"
  },
  {
    "id": "steamworld_dig_2",
    "times": {
      "main": 7,
      "extra": 10,
      "complete": 13
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": true,
    "title": "SteamWorld Dig 2"
  },
  {
    "id": "steep",
    "times": {
      "main": 11.5,
      "extra": 21,
      "complete": 36
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Steep"
  },
  {
    "id": "street_fighter_v",
    "times": {
      "main": 3,
      "extra": 11,
      "complete": 49.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Street Fighter V"
  },
  {
    "id": "sundered",
    "times": {
      "main": 13,
      "extra": 15,
      "complete": 17
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Sundered"
  },
  {
    "id": "tekken_7",
    "times": {
      "main": 3.5,
      "extra": 7,
      "complete": 15.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Tekken 7"
  },
  {
    "id": "tetris_effect",
    "times": {
      "main": 2.5,
      "extra": 9,
      "complete": 33.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Tetris Effect"
  },
  {
    "id": "the_bridge",
    "times": {
      "main": 4,
      "extra": 5.5,
      "complete": 7.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": true,
    "title": "The Bridge"
  },
  {
    "id": "the_evil_within",
    "times": {
      "main": 16,
      "extra": 19,
      "complete": 37
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "The Evil Within"
  },
  {
    "id": "the_evil_within_2",
    "times": {
      "main": 13,
      "extra": 18.5,
      "complete": 28
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "The Evil Within 2"
  },
  {
    "id": "the_flame_in_the_flood",
    "times": {
      "main": 9.5,
      "extra": 15,
      "complete": 25.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "The Flame in the Flood"
  },
  {
    "id": "the_outer_worlds",
    "times": {
      "main": 12.5,
      "extra": 24.5,
      "complete": 35.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "The Outer Worlds"
  },
  {
    "id": "the_sexy_brutale",
    "times": {
      "main": 6,
      "extra": 7,
      "complete": 8.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "The Sexy Brutale"
  },
  {
    "id": "the_surge",
    "times": {
      "main": 20,
      "extra": 28.5,
      "complete": 41.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "The Surge"
  },
  {
    "id": "the_swindle",
    "times": {
      "main": 10,
      "extra": 21,
      "complete": 21
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": true,
    "title": "The Swindle"
  },
  {
    "id": "the_talos_principle",
    "times": {
      "main": 15.5,
      "extra": 20.5,
      "complete": 28
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "The Talos Principle"
  },
  {
    "id": "the_witness",
    "times": {
      "main": 17.5,
      "extra": 25.5,
      "complete": 45
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "The Witness"
  },
  {
    "id": "thief_2014",
    "times": {
      "main": 10.5,
      "extra": 22,
      "complete": 42
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Thief (2014)"
  },
  {
    "id": "thimbleweed_park",
    "times": {
      "main": 10.5,
      "extra": 13.5,
      "complete": 14.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Thimbleweed Park"
  },
  {
    "id": "this_is_the_police",
    "times": {
      "main": 18.5,
      "extra": 21,
      "complete": 25.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "This is the Police"
  },
  {
    "id": "titanfall_2",
    "times": {
      "main": 6,
      "extra": 8,
      "complete": 13.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Titanfall 2"
  },
  {
    "id": "trackmania_turbo",
    "times": {
      "main": 9.5,
      "extra": 26,
      "complete": 70
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "TrackMania Turbo"
  },
  {
    "id": "transistor",
    "times": {
      "main": 6,
      "extra": 8.5,
      "complete": 15.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Transistor"
  },
  {
    "id": "trials_fusion",
    "times": {
      "main": 6.5,
      "extra": 24,
      "complete": 87
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Trials Fusion"
  },
  {
    "id": "tropico_5",
    "times": {
      "main": 20.5,
      "extra": 39.5,
      "complete": 92.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Tropico 5"
  },
  {
    "id": "ultimate_marvel_vs_capcom_3",
    "times": {
      "main": 59,
      "extra": 10.5,
      "complete": 102
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Ultimate Marvel Vs Capcom 3"
  },
  {
    "id": "uncanny_valley",
    "times": {
      "main": 1.5,
      "extra": 2.5,
      "complete": 5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": true,
    "title": "Uncanny Valley"
  },
  {
    "id": "unravel",
    "times": {
      "main": 6,
      "extra": 7.5,
      "complete": 12
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Unravel"
  },
  {
    "id": "until_dawn",
    "times": {
      "main": 8,
      "extra": 9,
      "complete": 18
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Until Dawn"
  },
  {
    "id": "until_dawn_rush_of_blood",
    "times": {
      "main": 2,
      "extra": 3.5,
      "complete": 3.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Until Dawn: Rush of Blood"
  },
  {
    "id": "va11_hall_a_cyberpunk_bartender_action",
    "times": {
      "main": 10.5,
      "extra": 13,
      "complete": 18
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": false,
    "vita": true,
    "title": "VA-11 Hall-A: Cyberpunk Bartender Action"
  },
  {
    "id": "valiant_hearts_the_great_war",
    "times": {
      "main": 6.5,
      "extra": 7.5,
      "complete": 9
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Valiant Hearts: The Great War"
  },
  {
    "id": "vampyr",
    "times": {
      "main": 16.5,
      "extra": 28,
      "complete": 41.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Vampyr"
  },
  {
    "id": "wanted_corp",
    "times": {
      "main": 4,
      "extra": 4.5,
      "complete": 4.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": false,
    "vita": true,
    "title": "Wanted Corp."
  },
  {
    "id": "watch_dogs_legion",
    "times": {
      "main": 17,
      "extra": 30.5,
      "complete": 49.5
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Watch Dogs Legion"
  },
  {
    "id": "wipeout_omega_collection",
    "times": {
      "main": 28,
      "extra": 28,
      "complete": 28
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Wipeout Omega Collection"
  },
  {
    "id": "wizard_of_legend",
    "times": {
      "main": 6,
      "extra": 15.5,
      "complete": 20.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Wizard of Legend"
  },
  {
    "id": "worms_battlegrounds",
    "times": {
      "main": 13,
      "extra": 16.5,
      "complete": 16.5
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Worms Battlegrounds"
  },
  {
    "id": "worms_rumble",
    "times": {
      "main": 20,
      "extra": 20,
      "complete": 20
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Worms Rumble"
  },
  {
    "id": "xcom_2",
    "times": {
      "main": 31,
      "extra": 43.5,
      "complete": 73
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "XCOM 2"
  },
  {
    "id": "yakuza_0",
    "times": {
      "main": 31,
      "extra": 65.5,
      "complete": 133
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Yakuza 0"
  },
  {
    "id": "yakuza_kiwami",
    "times": {
      "main": 18,
      "extra": 32.5,
      "complete": 84
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Yakuza Kiwami"
  },
  {
    "id": "zero_time_dilemma",
    "times": {
      "main": 21,
      "extra": 21.5,
      "complete": 22
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Zero Time Dilemma"
  },
  {
    "id": "assassins_creed_iii_remastered",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": true,
    "ps4": true,
    "vita": true,
    "title": "Assassin's Creed III Remastered"
  },
  {
    "id": "assassins_creed_freedom_cry",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": true,
    "ps4": false,
    "vita": false,
    "title": "Assassin's Creed: Freedom Cry"
  },
  {
    "id": "batman_arkham_asylum",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": true,
    "ps4": false,
    "vita": false,
    "title": "Batman: Arkham Asylum"
  },
  {
    "id": "batman_arkham_city",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": true,
    "ps4": false,
    "vita": false,
    "title": "Batman: Arkham City"
  },
  {
    "id": "batman_the_telltale_series",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": true,
    "ps4": false,
    "vita": false,
    "title": "Batman: The Telltale Series"
  },
  {
    "id": "bulletstorm_full_clip_edition",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": true,
    "ps4": false,
    "vita": false,
    "title": "Bulletstorm: Full Clip Edition"
  },
  {
    "id": "fall_guys",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": true,
    "ps4": false,
    "vita": false,
    "title": "Fall Guys"
  },
  {
    "id": "game_of_thrones_a_tell_tale_games_series",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": true,
    "ps4": false,
    "vita": false,
    "title": "Game of Thrones - A TellTale Games Series"
  },
  {
    "id": "king_oddball",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": true,
    "ps4": false,
    "vita": false,
    "title": "King Oddball"
  },
  {
    "id": "life_is_strange",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": true,
    "ps4": false,
    "vita": false,
    "title": "Life Is Strange"
  },
  {
    "id": "metal_gear_solid_v_ground_zeroes",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": true,
    "ps4": false,
    "vita": false,
    "title": "Metal Gear Solid V: Ground Zeroes"
  },
  {
    "id": "middle_earth_shadow_of_mordor_game_of_the_year",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": true,
    "ps4": false,
    "vita": false,
    "title": "Middle-Earth: Shadow of Mordor - Game of the Year"
  },
  {
    "id": "night_in_the_woods",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": true,
    "ps4": false,
    "vita": false,
    "title": "Night in the Woods"
  },
  {
    "id": "shadow_complex_remastered",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": true,
    "ps4": false,
    "vita": false,
    "title": "Shadow Complex: Remastered"
  },
  {
    "id": "sleeping_dogs_definitive_edition",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": true,
    "ps4": false,
    "vita": false,
    "title": "Sleeping Dogs: Definitive Edition"
  },
  {
    "id": "tales_from_the_borderlands",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": true,
    "ps4": false,
    "vita": false,
    "title": "Tales from the Borderlands"
  },
  {
    "id": "the_last_of_us_remastered",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": true,
    "ps4": false,
    "vita": false,
    "title": "The Last of Us Remastered"
  },
  {
    "id": "the_wolf_among_us",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": true,
    "ps4": false,
    "vita": false,
    "title": "The Wolf Among Us"
  },
  {
    "id": "wolfenstein_the_new_order",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": true,
    "ps4": false,
    "vita": false,
    "title": "Wolfenstein: The New Order"
  },
  {
    "id": "wolfenstein_the_old_blood",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": true,
    "ps4": false,
    "vita": false,
    "title": "Wolfenstein: The Old Blood"
  },
  {
    "id": "wolfenstein_ii_the_new_colossus",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": false,
    "jettisoned": false,
    "is_rerun": true,
    "ps4": false,
    "vita": false,
    "title": "Wolfenstein II: The New Colossus"
  },
  {
    "id": "abzu",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "ABZÛ"
  },
  {
    "id": "assassins_creed_odyssey",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Assassin's Creed Odyssey"
  },
  {
    "id": "assassins_creed_origins",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Assassin's Creed Origins"
  },
  {
    "id": "assassins_creed_syndicate",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Assassin's Creed: Syndicate"
  },
  {
    "id": "assassins_creed_unity",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Assassin's Creed Unity"
  },
  {
    "id": "batman_arkham_knight",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Batman: Arkham Knight"
  },
  {
    "id": "batman_the_enemy_within_the_telltale_series",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Batman: The Enemy Within - The Telltale Series"
  },
  {
    "id": "broken_age",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Broken Age"
  },
  {
    "id": "burly_menat_sea",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Burly Men at Sea"
  },
  {
    "id": "burnout_paradise_remastered",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Burnout Paradise Remastered"
  },
  {
    "id": "catlateral_damage",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Catlateral Damage"
  },
  {
    "id": "conan_exiles",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Conan Exiles"
  },
  {
    "id": "counter_spy",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "CounterSpy"
  },
  {
    "id": "dead_cells",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Dead Cells"
  },
  {
    "id": "dear_esther",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Dear Esther"
  },
  {
    "id": "detroit_become_human",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Detroit: Become Human"
  },
  {
    "id": "doom",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "DOOM"
  },
  {
    "id": "dishonored",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Dishonored 2"
  },
  {
    "id": "dishonored_death_of_the_outsider",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Dishonored: Death of the Outsider"
  },
  {
    "id": "donut_county",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Donut County"
  },
  {
    "id": "everybodys_golf",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Everybody's Golf"
  },
  {
    "id": "far_cry",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Far Cry 5"
  },
  {
    "id": "firewatch",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Firewatch"
  },
  {
    "id": "full_throttle_remastered",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Full Throttle Remastered"
  },
  {
    "id": "god_of_war",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "God of War"
  },
  {
    "id": "gorogoa",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Gorogoa"
  },
  {
    "id": "grim_fandango",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Grim Fandango"
  },
  {
    "id": "hatoful_boyfriend",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Hatoful Boyfriend"
  },
  {
    "id": "hellblade_senuas_sacrifice",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Hellblade: Senua's Sacrifice"
  },
  {
    "id": "here_they_lie",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Here They Lie"
  },
  {
    "id": "horizon_zero_dawn",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Horizon: Zero Dawn"
  },
  {
    "id": "kerbal_space_program_enhanced_edition",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Kerbal Space Program Enhanced Edition"
  },
  {
    "id": "king_oddball_vita",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "King Oddball (Vita)"
  },
  {
    "id": "lego_batman_beyond_gotham",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "LEGO Batman 3: Beyond Gotham"
  },
  {
    "id": "life_is_strange_before_the_storm",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Life Is Strange: Before The Storm"
  },
  {
    "id": "marvels_guardians_of_the_galaxy_the_telltale_series",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Marvel's Guardians of the Galaxy: The Telltale Series"
  },
  {
    "id": "metal_gear_solid_v_the_phantom_pain",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Metal Gear Solid V: The Phantom Pain"
  },
  {
    "id": "mortal_kombat_11",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Mortal Kombat 11"
  },
  {
    "id": "mortal_kombat_x",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Mortal Kombat X"
  },
  {
    "id": "nier_automata",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Nier: Automata"
  },
  {
    "id": "persona_golden",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Persona 4 Golden"
  },
  {
    "id": "prey",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Prey"
  },
  {
    "id": "red_dead_redemption",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Red Dead Redemption 2"
  },
  {
    "id": "rocksmith",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Rocksmith 2014"
  },
  {
    "id": "saints_row_the_third_remastered",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Saints Row The Third Remastered"
  },
  {
    "id": "shadow_of_the_colossus",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Shadow of the Colossus"
  },
  {
    "id": "spider_man",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Spider-Man (2018)"
  },
  {
    "id": "star_wars_battlefront_ii",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Star Wars: Battlefront II (2017)"
  },
  {
    "id": "star_wars_jedi_fallen_order",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Star Wars Jedi: Fallen Order"
  },
  {
    "id": "tacoma",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Tacoma"
  },
  {
    "id": "the_last_of_us_part_ii",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "The Last of Us Part II"
  },
  {
    "id": "the_order",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "The Order: 1886"
  },
  {
    "id": "the_swapper",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "The Swapper"
  },
  {
    "id": "the_unfinished_swan",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "The Unfinished Swan"
  },
  {
    "id": "the_witcher_wild_hunt",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "The Witcher 3: Wild Hunt"
  },
  {
    "id": "thomas_was_alone",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Thomas Was Alone"
  },
  {
    "id": "three_fourths_home_extended_edition",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Three Fourths Home: Extended Edition"
  },
  {
    "id": "type_rider",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Type:Rider"
  },
  {
    "id": "uncharted_the_nathan_drake_collection",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Uncharted: The Nathan Drake Collection"
  },
  {
    "id": "uncharted_a_thiefs_end",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Uncharted 4: A Thief's End"
  },
  {
    "id": "uncharted_the_lost_legacy",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Uncharted: The Lost Legacy"
  },
  {
    "id": "undertale",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Undertale"
  },
  {
    "id": "watch_dogs",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Watch_Dogs 2"
  },
  {
    "id": "what_remains_of_edith_finch",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "What Remains of Edith Finch"
  },
  {
    "id": "wolfenstein_youngblood",
    "times": {
      "main": 0,
      "extra": 0,
      "complete": 0
    },
    "is_complete": true,
    "jettisoned": false,
    "is_rerun": false,
    "ps4": true,
    "vita": false,
    "title": "Wolfenstein: Youngblood"
  }
];
