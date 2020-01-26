window.onload = function () {
  var circle = document.getElementsByClassName('circle');
  var button = document.querySelector('button');
  var i = 0;
  button.onclick = function () {
    switch (i) {
      case 0: {
        circle[0].style.background = "red";
        circle[1].style.background = "none";
        circle[2].style.background = "none";
        break;
      }
      case 1: {
        circle[0].style.background = "none";
        circle[1].style.background = "yellow";
        circle[2].style.background = "none";
        break;
      }
      case 2:
        circle[0].style.background = "none";
        circle[1].style.background = "none";
        circle[2].style.background = "green";
    }
    i++;
    if (i == 3) {
      i = 0;
    }
  };
};