var down = document.getElementById("GFG");
var el = document.querySelector('.ui-btn.minimize');
          
el.addEventListener('click', function () {
var el2 = document.querySelector('.terminal');
el2.style.width = "300px";
el2.style.height = "34px";
el2.style.bottom = "6vh";
el2.style.top = "auto"
});


var down = document.getElementById("GFG");
var el = document.querySelector('.ui-btn.close');
          
el.addEventListener('click', function () {
var el2 = document.querySelector('.terminal');
el2.style.display = "none";
});

var down = document.getElementById("GFG");
var el = document.querySelector('.ui-btn.maximize');
          
el.addEventListener('click', function () {
var el2 = document.querySelector('.terminal');
el2.style.width = "70vw";
el2.style.height = "60vh";
el2.style.bottom = "auto";
el2.style.top = "40px"
});