

let x = Date.now();
let timer = false;
let accumulated = 0; 

setInterval(() => {
        let time = document.getElementById('time');
        if(timer){
            
            accumulated += Date.now()-x;

        }

        x = Date.now();

        time.innerHTML = format(accumulated);

}, 1000/60);

function format(mil){
    let ms = mil %1000;
    let st = Math.floor(((mil - ms) / 1000))
    let s = st%60
    let m = Math.floor((st/60)%60);
    let h = Math.floor((st/60/60));

    Number.prototype.ceros = function(n){
        return(this+'').padStart(n,0);
    }

    return h.ceros(2)+":"+m.ceros(2)+":"+s.ceros(2);

}

function start(){

    timer = true;
}

function pause(){

    timer = false;

}

function stop(){

    accumulated = 0;
}