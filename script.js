var text;
var regularExpression = /[!@#$%^'&*(),.?":{}|<>_~[\]áéíóúÁÉÍÓÚÜ]/;

function encrypt(message){
  if(regularExpression.test(message)){
    alert("Ingrese sólo mínusculas, sin tíldes ni caracteres especiales");
    return;
  } else{
    var arrayMessage = message.split("");
    for(var i = 0; i < arrayMessage.length; i++){
      if(arrayMessage[i] == "e"){
        arrayMessage[i]="enter";
      } else if(arrayMessage[i]== "i"){
        arrayMessage[i]="imes";
      } else if(arrayMessage[i] == "a"){
        arrayMessage[i]="ai";
      } else if(arrayMessage[i] == "o"){
        arrayMessage[i]="ober";
      } else if(arrayMessage[i] == "u"){
        arrayMessage[i]="ufat";
      }  
    }
    
    var resultArrayMessage = arrayMessage.join("");
    var spaceOfResult = document.getElementById("message-area");
    spaceOfResult.value = resultArrayMessage; 
  }
}


function decrypt(message){
  var finalMessage = message;
  if(regularExpression.test(message)){
    alert("Ingrese sólo mínusculas, sin tíldes ni caracteres especiales");
    return;
  } else{
    var search = message.includes('enter');
    if(search){
      finalMessage = finalMessage.replace(/enter/g,"e");
    }
    search = message.includes('imes');
    if(search){
      finalMessage = finalMessage.replace(/imes/g,"i");
    }
    search = message.includes('ai');
    if(search){
      finalMessage = finalMessage.replace(/ai/g,"a");
    }
    search = message.includes('ober');
    if(search){
      finalMessage = finalMessage.replace(/ober/g,"o");
    }
    search = message.includes('ufat');
    if(search){
      finalMessage = finalMessage.replace(/ufat/g,"u");
    }

    var spaceOfResult = document.getElementById("message-area");
    spaceOfResult.value = finalMessage; 
  }
}


function getText(){
  text = document.getElementById("text-area");
  text = text.value;
  encrypt(text);
}


function getTextDecrypt(){
  text = document.getElementById("text-area");
  text = text.value;
  decrypt(text);  
}

function copy(){
  var getElement = document.getElementById("message-area");
  var textToCOpy = getElement.value;
  navigator.clipboard.writeText(textToCOpy)
  .then(() => {
    alert("Copiado")
  })
  .catch((error) => {
    alert("Error al copiar el texto:", error);
  });
}

function main(){
  var buttonEncrypt = document.getElementById("button-encrypt");
  buttonEncrypt.addEventListener("click",getText)

  var buttonDecrypt = document.getElementById("button-decrypt");
  buttonDecrypt.addEventListener("click",getTextDecrypt)

  var buttonCopy = document.getElementById("button-copy");
  buttonCopy.addEventListener("click",copy);
}


document.addEventListener('DOMContentLoaded', main);
