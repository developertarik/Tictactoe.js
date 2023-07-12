
const gameBoard = (()=>{
    const box = document.getElementsByClassName("box");
const x = document.getElementById("X")
const o = document.getElementById("O")
const squareOne =document.getElementById("box-1")
const squareTwo = document.getElementById("box-2")
const squareThree = document.getElementById("box-3")
const squareFour = document.getElementById("box-4")
const squareFive = document.getElementById("box-5")
const squareSix = document.getElementById("box-6")
const squareSeven = document.getElementById("box-7")
const squareEight = document.getElementById("box-8")
const squareNine = document.getElementById("box-9")

const gboard = [];
//events
    x.addEventListener("click",()=>{

        for (let i = 0 ; i < box.length; i++) {
            if(box[i].innerText ==""){
                box[i].addEventListener('click' , ()=>{
                    gboard.push(box[i]);
                    console.log(gboard)
                    box[i].innerText = "X";
                   if(gboard.length >3){
                    if((squareOne.innerText == squareTwo.innerText)&& (squareThree.innerText == squareTwo.innerText)){
                        console.log("Winner: Player 1 1,2,3")
                        alert("Winner: Player 1 1,2,3")
                        location.reload();

                    }
                    else if ( (squareOne.innerText == squareFour.innerText) && (squareFour.innerText== squareSeven.innerText)){
                        console.log("Winner: Player 1 ,1,4,7")
                        alert("Winner: Player 1,1,4,7")
                        location.reload(); }
                    else if((squareOne.innerText==squareFive.innerText)&&(squareFive.innerText == squareNine.innerText)){
                        console.log("Winner: Player 1 , 1,5,9")
                        alert("Winner: Player 1 , 1,5,9")
                        location.reload();
                    }
                   }
                }) ; 
            
            }
    
                
          
         }
    })
    o.addEventListener("click",()=>{
        for (let i = 0; i < box.length; i++) {
            if(box[i].innerText ==""){
            box[i].addEventListener("click",()=>{
                box[i].innerText = "O";
                if(gboard.length >3){
                    if((squareOne.innerText == squareTwo.innerText)&& (squareThree.innerText == squareTwo.innerText)){
                        console.log("Winner: Player 2 1,2,3")
                        alert("Winner: Player 2 1,2,3")
                        location.reload();

                    }
                    else if ( (squareOne.innerText == squareFour.innerText) && (squareFour.innerText== squareSeven.innerText)){
                        console.log("Winner: Player 2 ,1,4,7")
                        alert("Winner: Player 2,1,4,7")
                        location.reload(); }
                    else if((squareOne.innerText == "O" && squareFive.innerText =="O")&&(squareFive.innerText == "O"&& squareNine.innerText =="O")){
                        console.log("Winner: Player 2 , 1,5,9")
                        alert("Winner: Player 2 , 1,5,9")
                        location.reload();
                    }
                   }
            })
        };
        }  
    })


 })();



 