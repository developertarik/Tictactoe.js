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
               }

            }) ; 
        
        }

            
      
     }
 
