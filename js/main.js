// Ham-menu func
const menu = document.querySelector('.ham-men')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')

    menu.addEventListener('click', () => {
        nav.classList.add('open-nav');
    })
    close.addEventListener('click', () => {
        nav.classList.remove('open-nav');
    })

// Progress bar 
let progressSection = document.querySelector('.progress-section');
let progressBar = document.querySelector('.progress-bar');
let progressNum = document.querySelector('.progress-num');

let x,y;

function updateProgressBar(){
    progressBar.style.height = `${getScrollPercentage()}%`;
    progressNum.innerText = `${Math.floor(getScrollPercentage())}%`;
    requestAnimationFrame(updateProgressBar)
};

function getScrollPercentage(){
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';

    var percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100;
    return percent;
};

updateProgressBar()

