const input = document.querySelector("#username")
const h1 = document.querySelector("h1")

input.addEventListener("input", function(e){
    h1.innerHTML = `Welcome, ${input.value}`
    if (input.value === ""){
        h1.innerHTML = "Enter Your Username"
    }
})