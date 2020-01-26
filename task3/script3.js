window.onload = function () {
  var ball = document.getElementsByClassName("ball")[0];
  var court = document.querySelector('img');
  court.onclick = function (event) {
    var x = event.clientX - 25;
    var y = event.clientY - 25;
    if (y < 60) y = 60;
    if (y > scrollHeight - 130) y = scrollHeight - 130;
    if (x < 130) x = 130;
    if (x > document.documentElement.scrollWidth - 900) x = document.documentElement.scrollWidth - 900;
    ball.style.transform = 'translate(' + x + "px, " + y + 'px';

  };

  var scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
};
