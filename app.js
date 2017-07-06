function select_random_game(elements) { 
  for(var i = 0, l = elements.length; i < l; i++) { elements[i].firstChild.className = ''; }

  var index = Math.floor(Math.random() * elements.length) % elements.length;

  elements[index].firstChild.className = 'label label-success';
};

function fib_next(a, b) { return [b, a+b]; };

function next_spin(elements, previous_timeout, next_timeout) {
  if (previous_timeout > 1000) { return; }

  [previous_timeout, next_timeout] = fib_next(previous_timeout, next_timeout);

  select_random_game(elements);

  setTimeout(function() {
    next_spin(elements, previous_timeout, next_timeout);
  }, previous_timeout);
};

function spin(ul_id) {
  var games = document.querySelectorAll("#" + ul_id + " LI");

  next_spin(games, 1, 1);
};

