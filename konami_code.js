const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  document.body.addEventListenter('keydown',function(e) {
  var index = 0;
  var key = parseInt(e.detail || e.which);
    if (key === code[index]) {
      index++;
      if (index ===code.length) {
        alert('CONGRATS!');
        index = 0;
      }
  } else {
    index = 0;
  }
})
}