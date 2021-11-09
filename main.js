function toGreen() {
  var greenE = document.getElementsByClassName('green');
  var checkBox = document.getElementById('turnGreen')
  if (checkBox.checked == true) {

    for (var i = 0; i < greenE.length; i++) {
      greenE[i].classList.add('mygreen')
    }
  }
}
