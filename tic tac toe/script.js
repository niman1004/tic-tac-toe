let tiles = document.querySelectorAll(".tile");
let reset = document.querySelector("#reset");
let winner= document.querySelector("#winner");


// console.log(tiles);
let turnO = true;

const winpatterns = [[0, 1, 2]
    , [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

tiles.forEach((tile) => {

    tile.addEventListener("click" , ()=>{
        // tile.innerHTML="test";
        if(turnO){
            tile.innerHTML="O";
            turnO=false;
            tile.style.color="blue";
            console.log("O made a move");
        }
        else{
            tile.innerHTML="X";
            tile.style.color="red";
            turnO=true;
            console.log("X made a move");
        }
        // console.log("button was pressed");
        tile.disabled=true;

        checkwinner()
    })
    

    reset.addEventListener("click" , ()=>{
        console.log("game reset");
        window.location.reload();
    })
    const checkwinner=()=>{
        for(let pattern of winpatterns){
            let val1=tiles[pattern[0]].innerText;
            let val2=tiles[pattern[1]].innerText;
            let val3=tiles[pattern[2]].innerText;

            if(val1 !="" && val2!= "" && val3!=""){
                if(val1==val2 && val2==val3){
                    // alert(`${val1} Won! Click reset to play again`);
                    winner.innerHTML=`${val1} Wins! `;
                   tiles.forEach(tile => {
                    tile.disabled=true;
                   }
                
                )

                // alert(`${val1} Won! Click reset to play again`);

                }
            }
        }
    }
});