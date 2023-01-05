let co= document.getElementById("countl")
let re = document.getElementById("rec")
let count = 0
function increment(){
    count = count+1
    co.innerText=count
}
function save(){
    let tri= count + " - "
    re.textContent += tri
    co.innerText = 0
    count = 0
}
