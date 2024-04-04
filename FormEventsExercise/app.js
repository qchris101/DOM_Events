const form = document.querySelector('form');
const productInput = document.querySelector("#product")
const qtyInput = document.querySelector("#qty")
const list = document.querySelector("#list")

form.addEventListener("submit", function(event){
    event.preventDefault()
    const productName = productInput.value
    const amount = qtyInput.value
    const newLi = document.createElement("LI")
    newLi.innerText = `${amount} ${productName}`
    list.append(newLi)
    productInput.value = ""
    qtyInput.value = ""
    
})