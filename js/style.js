var number1=1
let runfn= function() {
   
    pause.style.backgroundImage= `url('./run/knight-se-run${number1}.png')`;
    number1++;
    if(number1>=9)
    {
        number1=1;
    }
}
let run=setInterval(runfn, 100);
function dayChangeColor() {
    for (let index = 255; index >128; index-=2) {
    setTimeout(() => {
        datesee.style.color =`rgb(${index},0,0)`
    }, (255-index)*10);
}
}
