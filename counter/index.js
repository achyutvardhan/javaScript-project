const decrease = document.getElementById('decrease')
const reset = document.getElementById('reset')
const increase = document.getElementById('increase')
decrease.addEventListener('click',dec)
increase.addEventListener('click',inc)
reset.addEventListener('click',rese)
const timer = document.getElementById('timer')
let time =0 ;
timer.textContent = time
function inc(e) {
    time++;
    timer.textContent = time
}
function dec(e) {
    if(time>0)
    {
    time--;
    timer.textContent = time
    }
}
function rese(e) {
    time = 0;
    timer.textContent = time
}