const gameBoard = {
    gameBoard :[],
    player:[],
} 
const box = document.getElementsByClassName("box");
const x = document.getElementById("X")
const o = document.getElementById("O")

x.addEventListener("click",()=>{
    for (let i = 0 ; i < box.length; i++) {
        box[i].addEventListener('click' , ()=>{
            box[i].innerText = "X";
        }) ; 
     }
})
o.addEventListener("click",()=>{
    for (let i = 0; i < box.length; i++) {
        box[i].addEventListener("click",()=>{
            box[i].innerText = "O";
        })
    }  
})
