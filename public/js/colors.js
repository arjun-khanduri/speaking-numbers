var colors=["rgb(255, 0, 24)", "rgb(255, 165, 44)", "rgb(255, 255, 65)", "rgb(0, 128, 24)", "rgb(0, 0, 249)", "rgb(134, 0, 125)"];
var h1=document.querySelector("h1");
h1.style.backgroundColor=colors[0];
var i=1;
setInterval(function(){
        h1.style.backgroundColor=colors[i];
        i++;
        if(i===colors.length)
            i=0;
},2500);