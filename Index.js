let box=document.querySelectorAll(".box");
let reset=document.querySelector(".clear");



let turnX=true;



const winpatter=
[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]


];

box.forEach((boxs) =>
{
    boxs.addEventListener("click" ,()=>
    {
       if(turnX)
       {
        boxs.innerText="X";
        turnX=false;
       }
       else{
        boxs.innerText="O";
        turnX=true;
       }
        
       boxs.disabled=true;

       Winner();
    });
    
});
   
const resetGame=()=>
    {
        turnX=true;
        enabledd();
        setTimeout(() => {
            alert("କାଇଁ  ପାରିବନି ନା ଭୁଲ ହୋଇଗଲା" );
        }, 12);
      return;
    };

const disabledd =()=>
{
    for( let boxs of box)
    {
        boxs.disabled=true;
    }
};
const enabledd=()=>
{
    for( let boxs of box)
        {
            boxs.disabled=false;
            boxs.innerText="";
        }

};


const Winner =()=>
{
    for( let pattern of winpatter)
    {
        
        
        let pos1=box[pattern[0]].innerText;
        let pos2=box[pattern[1]].innerText;
        let pos3=box[pattern[2]].innerText;
         if(pos1!=""&&pos2!=""&&pos3!="")
         {

            if(pos1===pos2 && pos2===pos3)
            {
                setTimeout(() => {
                    alert("Winner is: " + pos1);
                }, 13);
                disabledd();
                return;
            }
           
         }
         


    }

};


reset.addEventListener("click",resetGame);