alert("CONNECTED VOICE");
var box = document.getElementById("container");
var res = document.getElementById("res");
res.addEventListener("click", function () {
    var text=box.textContent;
    var arr=text.split(" ");
    var a=window.location.pathname.lastIndexOf("/");
    var b=window.location.pathname.substring(1,a+1);
    for(let x = 0; x < arr.length-1; x++)
        arr[x] = arr[x]+".mp3";
    (function play(x){
        setTimeout(function(){
            var s=b+"js/sound/"+arr[x];
            console.log(s);
            var audio=new Audio(s);
            audio.play();
            if(i<arr.length)
                play(x+1);
        },1000);
    })(0);
});