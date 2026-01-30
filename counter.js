


const lowerbutton = document.getElementById("lowerbutton")
const resetbutton = document.getElementById("resetbutton")
const greaterbutton = document.getElementById("greaterbutton")

let count = 0;

greaterbutton.onclick = function(){
     count++;
     numberlabel.textContent = count

} 
lowerbutton.onclick = function(){
     count--;
     numberlabel.textContent = count

} 
resetbutton.onclick = function(){
     count = 0;
     numberlabel.textContent = count

} 
    



