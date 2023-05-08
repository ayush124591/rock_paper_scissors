
/* gets user */
let rock="rock";
let paper="paper";
let scissor = "scissor";
let user = computer = 0 ;

function getUserChoice(){
    let userInput = prompt("your choice :- ");
    return userInput.toLocaleLowerCase();
}

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

function noOfRounds(){
    let input = prompt("how many rounds do you wish to play ? ")
    return Number(input);
}
/* true for user win false for computer win */
function playRound(userChoice,computerChoice){

        if (userChoice==rock){
            if (computerChoice==rock){user += 0.5 , computer += 0.5;return ; }
            if (computerChoice==paper){++computer;return ; }
            if (computerChoice==scissor){++user;return ; }
        }

        if (userChoice==paper){
            if (computerChoice==rock){++user;return ; }
            if (computerChoice==paper){user += 0.5 ; computer += 0.5;return ; }
            if (computerChoice==scissor){++computer;return ; }
        }

        if (userChoice==scissor){
            if (computerChoice==rock){++computer;return ; }
            if (computerChoice==paper){++user;return ; }
            if (computerChoice==scissor){user += 0.5 ;  computer += 0.5 ; return ; }
        }
        
}

function game(userChoice,computerChoice,rounds){
    for (let i=1;i<=rounds;i++){

        playRound(userChoice(),computerChoice());

    }

    if (user>computer){
        console.log("Hurray you won ! ");
        console.log(`Score  you : ${user} computer : ${computer}`);
    }else if (user<computer){
        console.log("Opps you lost ! ");
        console.log(`Score  you : ${user} computer : ${computer}`);
    }else {
        console.log("whoah it's a tie  ! ");
        console.log(`Score  you : ${user} computer : ${computer}`);
    }

}


rounds = noOfRounds();
game(getUserChoice,getComputerChoice,rounds);

