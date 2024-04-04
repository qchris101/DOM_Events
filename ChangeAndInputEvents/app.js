const input = document.querySelector("input")
// input.addEventListener("change", function(){
//     console.log(input.value)
// })
const h1 = document.querySelector('h1')


input.addEventListener('input', function(e){
    h1.innerHTML = input.value
    console.log(e)
    input
})