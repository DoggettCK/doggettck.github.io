Vue.component('untimed-game-list', {
  props: { games: Array, header: String },
  template: `
  <div class="row">
    <div class="text-center col-md-12 h3">{{header}}</div>
    <untimed-game v-for="game in games" v-bind:game="game" v-bind:key="game.id" />
  </div>
  `
});

Vue.component('timed-game-list', {
  props: { games: Array, header: String },
  template: `
  <div class="row">
    <div class="text-center col-md-12 h3">{{header}}</div>
    <timed-game v-for="game in games" v-bind:game="game" v-bind:time="$parent.$data.time" v-bind:key="game.id" />
  </div>
  `
});

Vue.component('untimed-game', {
  props: { game: Object },
  template: '<div class="col-md-4">{{game.title}}</div>'
});

Vue.component('timed-game', {
  props: { game: Object, time: String, fullWidth: Boolean },
  render(createElement) {
    var hours = 0;

    switch(this.time) {
      case "main":
        hours = this.game.times.main;
        break;
      case "extra":
        hours = this.game.times.extra;
        break;
      default:
        hours = this.game.times.complete;
    }

    var description = this.game.title + " (" + hours + " hours)";
    var children = [createElement('span', description)];

    if (this.game.ps4) {
      children.push(createElement('img', {attrs: {src: "images/ps4.svg"}}))
    }
    
    if (this.game.vita) {
      children.push(createElement('img', {attrs: {src: "images/vita.svg"}}))
    }

    if (this.fullWidth) {
      attrs = {class: ""}
    } else {
      attrs = {class: "col-md-4"}
    }
    
    return createElement('div', {attrs: attrs}, children);
  }
});

Vue.component('time-summary', {
  props: { timeSummary: Number },
  template: `
  <h2 id="summary_time" class="text-center">
    That's {{timeSummary}} total hours of gaming to look forward to.
  </h2>
  `
});

Vue.component('top-n-games', {
  props: { numGames: Number, games: Array, time: String },
  computed: {
    shortest: function() {
      switch(this.time) {
        case "main":
          var sort_func = (a, b) => (a.times.main >= b.times.main) ? 1 : -1;
          break;
        case "extra":
          var sort_func = (a, b) => (a.times.extra >= b.times.extra) ? 1 : -1;
          break;
        default:
          var sort_func = (a, b) => (a.times.complete >= b.times.complete) ? 1 : -1;
      }

      return this.games.sort(sort_func).slice(0, this.numGames);
    },
    longest: function() {
      switch(this.time) {
        case "main":
          var sort_func = (a, b) => (a.times.main < b.times.main) ? 1 : -1;
          break;
        case "extra":
          var sort_func = (a, b) => (a.times.extra < b.times.extra) ? 1 : -1;
          break;
        default:
          var sort_func = (a, b) => (a.times.complete < b.times.complete) ? 1 : -1;
      }

      return this.games.sort(sort_func).slice(0, this.numGames);
    },
    userFriendlyTime: function() {
      switch(this.time) {
        case "main":
          return "Main Story";
        case "extra":
          return "Main Story + Extras";
        default:
          return "Complete";
      }
    }
  },
  template: `
    <div id="summary" class="row">
      <div class="col-md text-center">
        <h3>Shortest {{numGames}} games ({{userFriendlyTime}})</h3>
        <ol>
          <li v-for="game in shortest"
          v-bind:game="game"
          v-bind:time="$parent.$data.time"
          v-bind:key="game.id">
            <timed-game v-bind:game="game" v-bind:time="$parent.$data.time" v-bind:full-width="true"></timed-game>
          </li>
        </ol>
      </div>
      <div class="col-md text-center">
        <h3>Longest {{numGames}} games ({{userFriendlyTime}})</h3>
        <ol>
          <li v-for="game in longest"
          v-bind:game="game"
          v-bind:time="$parent.$data.time"
          v-bind:key="game.id">
            <timed-game v-bind:game="game" v-bind:time="$parent.$data.time" v-bind:full-width="true"></timed-game>
          </li>
        </ol>
      </div>
    </div>
  `
})

Vue.component('random-game', {
  props: { game: Object, time: String },
  template: `
  <div>
    <h2 class="text-center">Don't know what to play?</h2>
    <timed-game class="text-center" v-bind:game="game" v-bind:time="time"></timed-game>
  </div>
  `
});

sort_by_game_title = function(game_a, game_b) {
  return game_a.title.localeCompare(game_b.title);
};

var app = new Vue({
  el: '#app',
  data: { games: all_games, time: 'complete' },
  computed: {
    randomGame: function() {
      var playable = this.gamesToPlay;

      return playable[Math.floor(Math.random() * playable.length)];
    },
    gamesToPlay: function() {
      return this.games
        .filter(game => !game.jettisoned && !game.is_rerun && !game.is_complete)
        .sort(sort_by_game_title);
    },
    completed: function() {
      return this.games
        .filter(game => game.is_complete)
        .sort(sort_by_game_title)
    },
    jettisoned: function() {
      return this.games
        .filter(game => game.jettisoned)
        .sort(sort_by_game_title)
    },
    reruns: function() {
      return this.games
        .filter(game => game.is_rerun)
        .sort(sort_by_game_title)
    },
    timeSummary: function() {
      switch(this.time) {
        case "main":
          return this.gamesToPlay.reduce((total, game) => total + game.times.main, 0);
        case "extra":
          return this.gamesToPlay.reduce((total, game) => total + game.times.extra, 0);
        default:
          return this.gamesToPlay.reduce((total, game) => total + game.times.complete, 0);
      }
    }
  },
  methods: {
    setTime: function(time) { this.time = time; }
  }
})

