var mouse = document.getElementById("mouse");
document.getElementById("mouse").addEventListener("click", function(){
    foundItem("mouse");
}, false);

var pizza = document.getElementById("pizza");
document.getElementById("pizza").addEventListener("click", function(){
    foundItem("pizza");
}, false);

var ball = document.getElementById("ball");
document.getElementById("ball").addEventListener("click", function(){
    foundItem("ball");
}, false);

function replay(){
    location.reload();
    }