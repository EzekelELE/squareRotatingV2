

// setInterval(function(){ 
//    var el = document.createElement("div");
//    el.setAttribute("class","respawn");
//    document.body.appendChild(el);
// }, 1250)

// setTimeout(function(){
//    setInterval(function(){
//       document.body.removeChild(document.body.firstChild);
   
//    }, 1250)
// }, 10000)

// var myVar = setInterval(myTimer, 1000);
// var i = 0;
// var place = '--i';
// function myTimer() {
//    var el = document.createElement("div");
//    el.setAttribute("class","respawn");
//    el.setAttribute("style", "--i:"+i);
//    el.style.boxShadow = "0px 0px 5px blue , 0px 0px 10px blue ,inset 0px 0px 5px blue";
//    document.body.appendChild(el);
//  if (i >= 2) {
//    clearInterval(myVar);
// }

// console.log("gg" + i);
//  i++;
// }

var all = document.querySelectorAll("div");
var rgb1 = Math.floor(Math.random()*255);
all.forEach(element => {
   element.style.boxShadow = "0px 0px 5px rbg("+ rgb1 +","  + rgb1  + "," + rgb1+ ")"  ," 0px 0px 10px blue ,inset 0px 0px 5px blue";
});

document.body.onclick = function(){
   all.forEach(element => {
      element.classList.add("rot");
      
   });
  
}
all.forEach(element => {
   element.onanimationend = function(){
      element.classList.remove("rot");
   }
   
});

