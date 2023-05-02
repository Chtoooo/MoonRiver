let modal = document.getElementById("myModal");
let btn = document.getElementById("modalBtn");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
  let email = document.getElementById("emailName");
  let modalEmail = document.getElementById("modalInputEmail");
  modalEmail.value = email.value;
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}