document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt)
})

const input = document.querySelector('input')
input.addEventListener('keydown', function(e){
    console.log(e.key)
    console.log(e.code)
})

// input.addEventListener('keydown', (e)=>{
//     console.log(e)
// })

window.addEventListener('keydown', (e) => {
    switch (e.key){
        case 'w':
            console.log("UP!");
           break;
        case 's':
            console.log("Down!")
            break
        case 'a':
            console.log("Left!")
            break
        case 'd':
            console.log("Right!")
            break
        default:
            console.log("Ignored!")
    }
})