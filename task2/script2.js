window.onload = function () {
  var open = document.getElementsByClassName('toOpen')[0];
  var close = document.getElementsByClassName('toClose')[0];
  var mWind = document.getElementById('newWind');
  open.onclick = function () {
    mWind.style.display = "block";
  }

  close.onclick = function (){
    mWind.style.display = "";
  }
};