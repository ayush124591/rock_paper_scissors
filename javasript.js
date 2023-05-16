
/* this is ui code */
let counter = 0 ;

const u3options = document.createElement("div");
const livestatus = document.createElement("div");
const livestatusimg = document.createElement("div");
const usersel = document.createElement("div");
const userimglive = document.createElement("img");
const cpmsel = document.createElement("div");
const cpmimglive = document.createElement("img");

const textscore = document.createElement("div");
const p = document.createElement("p");
const body = document.querySelector("body");
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
        
        /* trying to remove flex from body */

        
        /* trying ends here */
        paintoptions();
        intialpaint();
        clicks();
        
    });
    
    function paintoptions(){
        /* adding all the code for game html */
     
         body.setAttribute("style","");


        u3options.classList.add("u3options");
        const title = document.createElement("div");
        title.classList.add("title");
        u3options.setAttribute("style"," padding:0px;width : 100%;height : 100px;");
        title.setAttribute("style","margin-top : 50px;text-align: center;font-family: monospace;font-weight: 800;font-size : 24px;");
        title.textContent = "CHOOSE ONE!";
        u3options.appendChild(title);
        body.appendChild(u3options);


        threecontainers = document.createElement("div");
        threecontainers.classList.add('threecontainer');
        threecontainers.setAttribute("style","  display: flex; width : 60%;margin : auto ;justify-content: space-evenly ;");
        /* below is threesontainers */
        
        const rps = [".rock",".paper",".scissor"];
        rps.forEach(builder);
       u3options.appendChild(threecontainers);
       body.setAttribute("style","display:block;");
    }

    
    
}

function builder(rps){

        const rpshead = document.createElement("div");
        rpshead.classList.add(rps);
        const button = document.createElement("button");
        button.classList.add(`${rps.slice(1,rps.length)}`);
        const rpsimg = document.createElement("div");
        const rpsimgimg = document.createElement("img");
        rpsimg.classList.add(rps.slice(1,rps.length)+"img");
        rpsimgimg.setAttribute("src","img/"+`${rps.slice(1,rps.length)}`+'.gif');
        rpsimgimg.setAttribute("alt","image of "+`${rps.slice(1,rps.length)}`);
        const rpstext = document.createElement("div");
        rpstext.classList.add(`${rps.slice(1,rps.length)}`+'text');
        const rpstextp = document.createElement("p");
        rpstextp.textContent = `${rps.slice(1,rps.length)}`.toUpperCase();

            /* styling */

       rpsimgimg.setAttribute("style"," width : 200px;height : auto;");
       rpshead.setAttribute("style","    flex-grow: 1;flex-shrink : 1;display: flex;flex-direction: column;align-items:center;");   
       rpstext.setAttribute("style","    font-weight: 600;font-size:18px;margin-bottom : 0px; padding : 0px;margin : 0px;");
       rpstextp.setAttribute("style","margin:0px;");

        /* appending all the elements to each other  */
        rpstext.appendChild(rpstextp);
        rpsimg.appendChild(rpsimgimg);
        button.appendChild(rpsimg);
        button.appendChild(rpstext);
        rpshead.appendChild(button);
        threecontainers.appendChild(rpshead);

    }

function intialpaint(){ 


/* now paint */
livestatusimg.appendChild(usersel);
usersel.appendChild(userimglive);
livestatusimg.appendChild(cpmsel);
cpmsel.appendChild(cpmimglive);
livestatus.appendChild(livestatusimg);
livestatus.appendChild(textscore);
textscore.appendChild(p);
body.appendChild(livestatus);
cpmimglive.setAttribute("src","img/download.jpeg"); 
userimglive.setAttribute("src","img/download.png");


p.textContent = "your score board for each round";
p.setAttribute("style","text-align : center;font-weight:800;font-size:28px;color:white;");
livestatus.setAttribute("style","width:100%;margin-top:240px;");
livestatusimg.setAttribute("style","display: flex; width : auto;height: auto ;justify-content : center ;gap : 60px;");
userimglive.setAttribute("style","    width : 320px;height: 320px;");
cpmimglive.setAttribute("style","    width : 320px;height: 320px;");



}


function clicks(){
    buttonrock = document.querySelector("button.rock");
    buttonpaper = document.querySelector("button.paper");
    buttonscissor = document.querySelector("button.scissor");

    
    
    buttonrock.addEventListener("click",paintrock);
    buttonpaper.addEventListener("click",paintpaper);
    buttonscissor.addEventListener("click",paintscissor);

}

function paintrock(){
 userimglive.setAttribute("src","img/rock.gif");  
 let x = paintcomputer(); 
 let user = "rock";
 scoreadder(x,user,x[1]);
}

function paintpaper(){
    userimglive.setAttribute("src","img/paper.gif");   
    let x= paintcomputer();
    let user = "paper";
    scoreadder(x,user,x[1]);
}
   
function paintscissor(){
    userimglive.setAttribute("src","img/scissor.gif");
    let x = paintcomputer();
    let user="scissor";
    scoreadder(x,user,x[1]);
 
}
   

function paintcomputer(){
     ++counter;
     let value = [];
     value.push(counter);
     let x = getComputerChoice();
     if(x=="rock"){
        cpmimglive.setAttribute("src","img/rock.gif");
        value.push("rock");
     }

     if(x=="paper"){
        cpmimglive.setAttribute("src","img/paper.gif");
        value.push("paper");
    }

     if(x=="scissor"){
        cpmimglive.setAttribute("src","img/scissor.gif");
        value.push("scissor");
    }

     return value;
}

let difference = 0 ;
function scoreadder(x,user,computer){
  
    if (user != computer){
        ++difference;
        recordkeeper(user,computer);
    }
    p.textContent = `Round ${x} : you ${user} vs computer ${computer}`;
    if (userscore ==5 || computerscore==5){
        u3options.remove();
        livestatus.remove();
        if(userscore==5){finalpaint(userscore,computerscore,"user");}
        else {finalpaint(computerscore,userscore,"computer");}
        
    }
}

let userscore = 0 ;
let computerscore = 0 ; 
function recordkeeper(user,computer){
    if(user=="rock"){
        if(computer=="paper"){++computerscore;}
        if(computer=="scissor"){++userscore;}
    }
    if(user=="paper"){
        if(computer=="rock"){++userscore;}
        if(computer=="scissor"){++computerscore;}
    }
    if(user=="scissor"){
        if(computer=="paper"){++userscore;}
        if(computer=="rock"){++computerscore;}
    }

}



/* this is ui code  */


/* This is ongame events */




/* gets user */

let rock="rock";
let paper="paper";
let scissor = "scissor";




/* gets computer choice  */

function getComputerChoice(){
        switch(Math.floor(Math.random()*3)){
            case 0 :
                return rock;
            case 1 :
                return paper;
            case 2 :
                return scissor;
            default :
            return undefined ;
        }
}

function finalpaint(score,uscore,winner){
    const finalscore = document.createElement("p");
    body.appendChild(finalscore);
    if (winner=="user"){
        finalscore.textContent = `YOU WON ! ${score}-${uscore}`;
    }
    if (winner=="computer"){
        finalscore.textContent = `YOU WON ! ${score}-${uscore}`;
    }
       
    body.setAttribute("style","display:flex;justify-content:center;align-items:center;");
    finalscore.setAttribute("style","font-size:64px;font-weight:800;color:pink;");
}

