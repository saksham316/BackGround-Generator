var col1 = document.querySelector(".color1");
var col2 = document.querySelector(".color2");
var grad = document.getElementById("gradientt");
var h3= document.querySelector("h3");

function changer(){
    grad.style.backgroundImage = ("linear-gradient(to right,"+col1.value+","+col2.value+")");
    h3.textContent = grad.style.backgroundImage;

};
col1.addEventListener("input",changer);
col2.addEventListener("input",changer);