const time = document.getElementById("time");
const timeFormat = document.getElementById("timeformat");
var meridian = "AM";

document.addEventListener("DOMContentLoaded", ()=>{
    ShowTime();
})

const ShowTime = ()=>{
function clock(){
let currentDate = new Date();    
var SS = currentDate.getSeconds();
var HH = currentDate.getHours();
var MM = currentDate.getMinutes();

if(HH>12){
    meridian = "PM";
    HH-=12;
}
    if(SS==60){
        SS=0;
        MM++;
    }
    else if(MM==60){
        MM=0;
        HH++;
        if(HH==13){
            HH=1;
            if(meridian=="AM")
                meridian = "PM";
            else
                meridian = "AM";
        }
    }
    HH = HH<10 ? `0${HH}` : HH;
    MM = MM<10 ? `0${MM}` : MM;
    SS = SS<10 ? `0${SS}` :SS;
    time.innerHTML=`${HH} : ${MM} : ${SS}`;
    timeFormat.innerHTML=`${meridian}`;
    SS++;
}
clock();
setInterval(clock,1000);}