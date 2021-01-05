let leftTriangle, rightTriangle, bottomTriangle, middleTriangle, cards,checkers,rock;

function getMenuElements(){
    leftTriangle=document.querySelector(".leftTriangle")
    rightTriangle=document.querySelector(".rightTriangle")
    bottomTriangle=document.querySelector(".bottomTriangle")
    middleTriangle=document.querySelector(".middleTriangle")
}
function getGames(){
    cards=document.querySelector('.cards')
    checkers=document.querySelector('.checkers')
    rock=document.querySelector('.rock')
}
function addMenuActions() {
    middleTriangle.addEventListener('click', ()=>{
        leftTriangle.classList.toggle('v_show')
        rightTriangle.classList.toggle("v_show");
        bottomTriangle.classList.toggle("v_show");
    })
    rightTriangle.addEventListener('click',()=>{
        cards.classList.add('playCards')
    })
    bottomTriangle.addEventListener("click", () => {
      checkers.classList.add("playCheckers");
    });
    leftTriangle.addEventListener('click',()=>{
        rock.classList.add('playRock')
    })
}

export { getMenuElements,getGames,addMenuActions };