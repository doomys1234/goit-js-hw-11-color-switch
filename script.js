const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    btnStart: document.querySelector('button[data-action="start"]'),
    btnStop: document.querySelector('button[data-action="stop"]')
}
let intervalId = null;
let isActive = false;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
 

refs.btnStart.addEventListener("click", startChangeBgColor)
refs.btnStop.addEventListener("click", stopChangeBgColor)

function startChangeBgColor() {

    if (isActive) {
        return;
    }
    
    const DELAY = 1000;
    isActive = true
    intervalId = setInterval(() => {
        
        console.log("запускаем");
        document.body.style.background = colors[randomIntegerFromInterval(0,colors.length)]
        
    },DELAY)
    

}

function stopChangeBgColor() {
    clearInterval(intervalId)
    console.log("очищаем");
}


