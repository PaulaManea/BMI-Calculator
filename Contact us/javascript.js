function popUp() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

document.querySelector("#sendMessage").onclick = sendMessage;
function sendMessage() {
  let name = document.querySelector('#fname').value;
  let email = document.querySelector('#email').value;
  let phoneNumber = document.querySelector('#phone_number').value;

  if ((name && email && phoneNumber) === undefined){
    alert("Please fill out your information and message.");}
  else {
    document.getElementById("sendMessage").innerText = "Message sent!";
    document.getElementById("sendMessage").style.backgroundColor = "green";
  }
}
