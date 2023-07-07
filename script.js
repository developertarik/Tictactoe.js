const gameBoard = {
    gameBoard :[],
    player:[],
} 
const box = document.getElementsByClassName("box");


for (let i = 0 ; i < box.length; i++) {
    box[i].addEventListener('click' , ()=>{
        box[i].innerText = "X";
    }) ; 
 }