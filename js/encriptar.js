
function encriptar(){

  var mensaje = document.getElementById("textoingreso").value.toLowerCase();  
  var textoEncriptado = mensaje
  .replaceAll("e","enter")
  .replaceAll("i","imes")
  .replaceAll("o","ober")
  .replaceAll("a","ai")
  .replaceAll("u","ufat")

  console.log(textoEncriptado);
  document.getElementById("textorespuesta").style.display = "inline";
  document.getElementById("textorespuesta").innerHTML = textoEncriptado;
  document.getElementById("textoingreso").value = "";
  document.getElementById("muneco").style.display = "none";
  document.getElementById("parrafo").style.display = "none";
  document.getElementById("parrafo2").style.display = "none";
  document.getElementById("copiar").style.display = "inline";

}

function desencriptar(){

  var textoEncriptado = document.getElementById("textoingreso").value.toLowerCase();
  var mensaje = textoEncriptado
  .replaceAll("enter","e")
  .replaceAll("imes","i")
  .replaceAll("ober","o")
  .replaceAll("ai","a")
  .replaceAll("ufat","u");

  console.log(mensaje);
  document.getElementById("textorespuesta").style.display = "inline";
  document.getElementById("textorespuesta").innerHTML = mensaje;
  document.getElementById("textoingreso").value = "";
  
  document.getElementById("muneco").style.display = "none";
  document.getElementById("parrafo").style.display = "none";
  document.getElementById("parrafo2").style.display = "none";
  document.getElementById("copiar").style.display = "inline";
  

}

function copiartext(){

  var textcopia = document.querySelector("#textorespuesta");
  textcopia.select();
  document.execCommand("copy");

}