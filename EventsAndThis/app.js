const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button')


for (let button of buttons){
    button.addEventListener('click', colorize)

}
const h1s = document.querySelectorAll('h1')

for (let h1 of h1s){
    h1.addEventListener('click', colorize)
    h1.style.display = 'center'
}

function colorize() {
    this.style.backgroundColor = makeRandColor()
    this.style.borderRadius = '15%'
    this.style.color = makeRandColor()
}