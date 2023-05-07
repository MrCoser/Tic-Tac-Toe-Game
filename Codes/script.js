console.log("Welcome to Tic-Tac-Toe")
let music = new Audio("music.mp3")
let turn = new Audio("ting.mp3")
let gameover = new Audio("game-over-arcade-6435.mp3")
let chance = "X"
let over = false

// function to change the turn
const changeTurn = ()=>{
    return (chance === "X" ? "0" : "X")
}

// function to check for win
const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2,-15,5,0],
        [3,4,5,-15,15,0],
        [6,7,8,-15,25,0],
        [0,3,6,-25,15,90],
        [1,4,7,-15,15,90],
        [2,5,8,-5,15,90],
        [0,4,8,-15,15,45],
        [2,4,6,-15,15,135],
    ]

    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText != "")) {
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won"
            over = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.width = "20vw";
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
} 


// main logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === '') {
            boxtext.innerText = chance;
            chance = changeTurn();
            turn.play();
            checkWin();

            if(!over) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + chance;
            }    
        }
    })
})

// add on-click listener for reset button
reset.addEventListener('click', ()=>{
    let b = document.querySelectorAll('.boxtext');
    Array.from(b).forEach(element =>{
        element.innerText = ""
    });

    turn = "X";
    over = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.line').style.width = "0vw";
})
