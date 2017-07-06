function select_random_game(elements) { 
  var index = Math.floor(Math.random() * elements.length) % elements.length;

  return highlight(elements[index]);
};

function highlight(element) { if(element) { element.className = "selected"; } return element; };
function unhighlight(element) { if(element) { element.className = ""; } return element; };
function fib_next(a, b) { return [b, a+b]; };

function spin(ul_id) {
  var games = document.querySelectorAll("#" + ul_id + " LI");

  next_spin(games, 1, 1);
};

function next_spin(elements, previous_timeout, next_timeout) {
  if (previous_timeout > 1000) { return; }

  [previous_timeout, next_timeout] = fib_next(previous_timeout, next_timeout);
  selected = select_random_game(elements);

  setTimeout(function() {
    unhighlight(selected);
    next_spin(elements, previous_timeout, next_timeout);
  }, previous_timeout);
};

