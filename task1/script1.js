window.onload = function () {
  var input = document.querySelector("input");
  input.oninput = function () {
    if (input.value.match(/[0-9]/)) {
      input.value = input.value.slice(0,input.value.length-1);
    }

  }


};