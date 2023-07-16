// //önce dışardan
// // 9 kareli array
// //3x3
// const row = 3;
// const column = 3;
// const array =[];

// for (let i = 0; i < row.length; i++) {
//     array[i] = [];
//     for (let j = 0; j < column.length; j++) {
//         array[i].push(Cell());

        
//     }
// }
// const getBoard = ()=>board;
// function gameController(playerOneName="Player One",
// playerTwoName="Player Two")
// {
//     const board = Gameboard();
//     const players= [
//         {
//             name:playerOneName,
//             token:"X",
//         },
//         {
    
//             name: playerTwoName,
//             token:"O",
//         }
//     ]
// }
const squareOne =document.getElementById("box-1")
const box = document.getElementsByClassName("box")
const squareTwo = document.getElementById("box-2")
const squareThree = document.getElementById("box-3")
const squareFour = document.getElementById("box-4")
const squareFive = document.getElementById("box-5")
const squareSix = document.getElementById("box-6")
const squareSeven = document.getElementById("box-7")
const squareEight = document.getElementById("box-8")
const squareNine = document.getElementById("box-9")

 let Player = "X";
       

     
     const gboard = [];

     for (let i = 0 ; i < box.length; i++) {
        if(box[i].innerText ==""){
            box[i].addEventListener('click' , ()=>{
                gboard.push(box[i]);
                console.log(gboard)
                if(box[i].innerText != "") return;
   
                box[i].innerText =  Player;
                Player == "X" ?  Player = "O" : Player = "X";
               if(gboard.length >3){
                //X
                if((squareOne.innerText == "X" && squareTwo.innerText =="X")&& (squareThree.innerText == "X" && squareTwo.innerText =="X")){
                    console.log("Winner: Player 1 1,2,3")
                    alert("Winner: Player 1 1,2,3")
                    location.reload();

                }
                else if ( (squareOne.innerText =="X"&& squareFour.innerText =="X") && (squareFour.innerText== "X" && squareSeven.innerText =="X")){
                    console.log("Winner: Player 1 ,1,4,7")
                    alert("Winner: Player 1,1,4,7")
                    location.reload(); }
                else if((squareOne.innerText=="X" && squareFive.innerText =="X")&&(squareFive.innerText == "X" &&squareNine.innerText =="X")){
                    console.log("Winner: Player 1 , 1,5,9")
                    alert("Winner: Player 1 , 1,5,9")
                    location.reload();
                }
                else if((squareFour.innerText=="X" && squareFive.innerText =="X")&&(squareFive.innerText == "X" &&squareSix.innerText =="X")){
                    console.log("Winner: Player 1 , 4,5,6")
                    alert("Winner: Player 1 , 4,5,6")
                    location.reload();
                }
                else if((squareSeven.innerText=="X" && squareEight.innerText =="X")&&(squareEight.innerText == "X" &&squareNine.innerText =="X")){
                    console.log("Winner: Player 1 , 7,8,9")
                    alert("Winner: Player 1 , 7,8,9")
                    location.reload();
                }
                else if((squareThree.innerText=="X" && squareFive.innerText =="X")&&(squareFive.innerText == "X" &&squareNine.innerText =="X")){
                    console.log("Winner: Player 1 , 3,5,9")
                    alert("Winner: Player 1 , 3,5,9")
                    location.reload();
                }
                else if((squareTwo.innerText=="X" && squareFive.innerText =="X")&&(squareFive.innerText == "X" &&squareEight.innerText =="X")){
                    console.log("Winner: Player 1 , 2,5,8")
                    alert("Winner: Player 1 , 2,5,8")
                    location.reload();
                }
                else if((squareThree.innerText=="X" && squareSix.innerText =="X")&&(squareSix.innerText == "X" &&squareNine.innerText =="X")){
                    console.log("Winner: Player 1 , 3,6,9")
                    alert("Winner: Player 1 , 3,6,9")
                    location.reload();
                }
                //O
                //0 
                //1 2 3 -4 5 6 - 789 
                else if((squareOne.innerText=="O" && squareTwo.innerText =="O")&&(squareTwo.innerText == "O" &&squareThree.innerText =="O")){
                    console.log("Winner: Player2 , 1,2,3")
                    alert("Winner: Player 2 , 1,2,3")
                    location.reload();
                }
                else if((squareFour.innerText=="O" && squareFive.innerText =="O")&&(squareFive.innerText == "O" &&squareSix.innerText =="O")){
                    console.log("Winner: Player 2, 4,5,6")
                    alert("Winner: Player 1 , 4,5,6")
                    location.reload();
                }
                else if((squareSeven.innerText=="O" && squareEight.innerText =="O")&&(squareEight.innerText == "O" &&squareNine.innerText =="O")){
                    console.log("Winner: Player 2 , 7,8,9")
                    alert("Winner: Player 2 , 7,8,9")
                    location.reload();
                }
                // 1-47 -2-58-3-6-9
                else if((squareOne.innerText=="O" && squareFour.innerText =="O")&&(squareFour.innerText == "O" &&squareSeven.innerText =="O")){
                    console.log("Winner: Player 2 , 1,4,7")
                    alert("Winner: Player 2 , 1,4,7")
                    location.reload();
                }
                else if((squareTwo.innerText=="O" && squareFive.innerText =="O")&&(squareFive.innerText == "O" &&squareEight.innerText =="O")){
                    console.log("Winner: Player 2 , 2,5,8")
                    alert("Winner: Player 2 , 2,5,8")
                    location.reload();
                }
                else if((squareThree.innerText=="O" && squareSix.innerText =="O")&&(squareSix.innerText == "O" &&squareNine.innerText =="O")){
                    console.log("Winner: Player2 , 3,6,9")
                    alert("Winner: Player 2 , 3,6,9")
                    location.reload();
                }
                else if((squareOne.innerText=="O" && squareFive.innerText =="O")&&(squareFive.innerText == "O" &&squareNine.innerText =="O")){
                    console.log("Winner: Player2 , 1,5,9")
                    alert("Winner: Player 2 , 1,5,9")
                    location.reload();
                }
                  else if((squareThree.innerText=="O" && squareFive.innerText =="O")&&(squareFive.innerText == "X" &&squareSeven.innerText =="X")){
                    console.log("Winner: Player 1 , 3,5,7")
                    alert("Winner: Player 1 , 3,5,7")
                    location.reload();
                }
               
                else if ((squareOne.innerText !="" && squareTwo.innerText !="") && (squareThree.innerText !="" && squareFour.innerText!="")&&(squareFive.innerText !="" && squareSix.innerText !="")&&(squareSeven.innerText !="" && squareNine.innerText !="" && squareEight.innerText !="")){
                    alert("Draw");
                    location.reload();
               }
               }
          
            }) ; 
        
        }

            
      
     }
 
