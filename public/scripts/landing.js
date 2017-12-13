// LANDING Page JavaScript file
let span = document.querySelector('main h1 span'),
    h1 = span.parentElement;

update();

function update(){
    if(window.innerWidth / screen.width < 0.5) {
        h1.style.fontSize = '13vw';
        span.style.backgroundPosition = 'bottom';
    } else if(window.innerWidth / screen.width < 0.7) {
        span.style.backgroundPosition = 'bottom';
        h1.style.fontSize = '8em';
    } else {
        span.style.backgroundPosition = 'center';
        h1.style.fontSize = '8em';
    }
}
    
window.addEventListener('resize', function() {
    update();
});