
const gameBoard = (()=>{
    const box = document.getElementsByClassName("box");
const x = document.getElementById("X")
const o = document.getElementById("O")
const gboard = [];
    x.addEventListener("click",()=>{

        for (let i = 0 ; i < box.length; i++) {
            if(box[i].innerText ==""){
                box[i].addEventListener('click' , ()=>{
                    gboard.push(box[i]);
                    console.log(gboard)
                    box[i].innerText = "X";
                   if(gboard.length >2){
                    if((gboard[0].innerText == gboard[1].innerText)&& (gboard[1].innerText == gboard[2].innerText)){
                        console.log("Winner X")
                    }
                    else if ( (gboard[1].innerText == gboard[5].innerText) && (gboard[9].innerText== gboard[5].innerText)){
                        console.log(`winner x :  because ${gboard[1].innerText} and ${gboard[5].innerText} and ${gboard[9].innerText} is all X`)
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
            })
        };
        }  
    })


 })();



 function clicked(event) {
    const id = event.target.id,
        first = 'box1',
        second = 'box2',
        third = 'box3',
        four = "box4",
        five = "box5",
        six = "box6",
        seven = "box7",
        eight = "box8",
        nine = "box9";
         if(first.innerText == "X" && second.innerText =="X" ){
            // ?
         }
}
