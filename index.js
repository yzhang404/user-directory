const button = document.querySelector('button.greeting')
function changeText(ev){
    ev.target.textContent ="Clickty Click"
}
button.addEventListener('click',changeText)
