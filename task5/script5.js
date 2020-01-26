window.onload = function () {
  var list = document.getElementById('listOfBooks');
  function setBackground(e) {
    for (var i = 0; i < list.children.length; i++) {
      list.children[i].style.background = "none";
      list.style.background = "none";
    }
    e.target.style.background = 'red';
  }
  list.addEventListener('click', setBackground, false);
};