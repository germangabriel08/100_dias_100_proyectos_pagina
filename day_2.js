var b002_button = document.getElementById('b002_button');
var line_1_002 = document.getElementById('line-1');
var line_2_002 = document.getElementById('line-2');
var line_3_002 = document.getElementById('line-3');

var b002_is_selected = false;

function handle_button_002() {
  b002_is_selected = !b002_is_selected;

  if (b002_is_selected) {
    line_1_002.classList.add('line-1-selected');
    line_1_002.classList.remove('line-1');
    line_2_002.classList.add('line-2-selected');
    line_2_002.classList.remove('line-2');
    line_3_002.classList.add('line-3-selected');
    line_3_002.classList.remove('line-3');
  } else {
    line_1_002.classList.remove('line-1-selected');
    line_1_002.classList.add('line-1');
    line_2_002.classList.remove('line-2-selected');
    line_2_002.classList.add('line-2');
    line_3_002.classList.remove('line-3-selected');
    line_3_002.classList.add('line-3');
  }
}

b002_button.onclick = handle_button_002;
