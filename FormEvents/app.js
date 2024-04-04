const form = document.querySelector("#shelterForm")
const input = document.querySelector("#catName")
const list = document.querySelector("#cats")
form.addEventListener("submit", function(event){
    event.preventDefault()
    // console.log(input.value)
    const catName = input.value
    const newLi = document.createElement("LI")
    newLi.innerText = catName
    list.append(newLi)
    input.value = ""
})
