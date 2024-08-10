let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;
let highScore = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game started");
        started = true;
        levelUp();
    }
    
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
} 

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
} 

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random()*3);
    let randClr = btns[randIdx];
    let randBtn = document.querySelector(`.${randClr}`);
    // console.log(randIdx);
    // console.log(randClr);
    // console.log(randBtn);
    gameSeq.push(randClr);

    gameFlash(randBtn);
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML = `Game over! Your Score was <b>${level}</b> <br> Highest Score is <b>${level}</b> Press ant key to stark`;
        document.querySelector("body").style.backgroundColor = "Red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 300);
        reset();
    }
}

function btnPress(){
    console.log("Button was pressed");
    let btn = this;
    let userClr = this.getAttribute("id");
    userSeq.push(userClr);
    // console.log(userSeq);
    userFlash(btn);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}

