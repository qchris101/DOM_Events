const btn = document.querySelector("#v2")

btn.onclick = function(){
    console.log("You clicked me ")
}

function scream(){
    console.log("scream")
}

btn.onmouseover = scream

const btn3 = document.querySelector("#v3")
btn3.addEventListener('click', function(){
    alert("Clicked")
})

function twist(){
    console.log("Twist")
}

function shout(){
    console.log("Shout")
}

const tasButton = document.querySelector("#tas")

tasButton.addEventListener("click", twist)
tasButton.addEventListener("click", shout)