function validar(){
var nombre, apellido, correo, password;
nombre= document.getElementById("first").value;
apellido= document.getElementById("last").value;
correo= document.getElementById("email").value;
password= document.getElementById("password").value;
expresion =/\w+@\w+\.+[a-z]/;
if(nombre === ""||apellido=== ""||correo=== ""||password=== "")
{
alert("todos los campos son obligatorios");
return false;
}
else if (!expresion.test(correo))
{
alert ("el correo no es valido")
}
}