// value 
var number = 0;

const value = document.getElementById("value")

// decrement 
const decr = document.getElementById("decrement")

decr.addEventListener("click", decrement)

function decrement(){
    if(value.innerText = 0){
        number--
    }
    else{
        value.innerText = number--
    }
}

// increment
const incre = document.getElementById("increment")

incre.addEventListener("click", increment)

function increment(){
    number++
    value.innerText = number
}

// reset 
const rst = document.getElementById("reset")

rst.addEventListener("click",reset)

function reset(){
    value.innerText = 0
    
}