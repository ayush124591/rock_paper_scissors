/* this is ui code */


const textrm = document.querySelector(".tdisplay");
textrm.addEventListener('animationend',removetext);

function removetext(e){
    const button=document.createElement("button");
    button.setAttribute("style","color:teal;font-size:28px;type:button;margin:auto;margin-top:10px;padding:5px;border-radius: 10px;");
    button.textContent = "PLAY"
    textrm.appendChild(button);
    button.addEventListener("click", ()=>{
        textrm.removeChild(textrm.firstChild);
        textrm.removeChild(textrm.firstChild);
        textrm.remove();
        paintoptions();
        
    });
    
    function paintoptions(){
        console.log("display text now ?");
    }
    
}

/* this is ui code  */