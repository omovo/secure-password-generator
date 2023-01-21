
var password = document.getElementByid("password");

function genPassword(){

  var chars = "032+&930%10537k3toajb5m7g10d@j10rNuR>?QV1-!¬HnR10NKFGWJ4801";

  var passwordlength =12
  var password = "";

  for (var i = 0; i <= passwordlength; i++){
    var randomNumber = Math.floor(Math.random () * chars.length);
    password += chars.substring(randomNumber, randomNumber +1);

  }
document.getElementById("password").value = password;

}

function copyPassword(){
   var copyText = document.getElementById("password");
   copyText.select();
   copyText.setSelectionRange(0,999);
   document.execCommand("copy");


}
