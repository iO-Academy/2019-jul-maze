var gameStart = new CustomEvent(
    'gameStart', {
        bubbles: false,
        cancelable: true,
        detail: {}
    }
)

var gameLose = new CustomEvent(
    'lose', {
        bubbles: false,
        cancelable: true,
        detail: {}
    }
)

var gameWin = new CustomEvent(
    'gameWin', {
        bubbles: false,
        cancelable: true,
        detail: {}
    }
)

document.querySelector('.start-zone').addEventListener('mouseover', function () {
    document.dispatchEvent(gameStart)
    console.log('Start!')
})

document.querySelector('.lose').addEventListener('mouseenter', function(){
    document.dispatchEvent(gameLose)
    console.log('You lose!')
})

document.querySelector('.end-zone').addEventListener('mouseover', function () {
    document.dispatchEvent(gameWin)
    console.log('You win!')
})

$(function(){

    function firstBrushLoop(){
     $('#first-brush')
         .animate({bottom: 250}, 1000)
         .animate({bottom: 150}, 1000, firstBrushLoop)
    }
    firstBrushLoop()
})

$(function(){

    function secondBrushLoop(){
        $('#second-brush')
            .animate({left: 380}, 600)
            .animate({left: 490}, 600, secondBrushLoop)
    }
    secondBrushLoop()
})

$(function(){

    function thirdBrushLoop(){
        $('#third-brush')
            .animate({right: 350}, 400)
            .animate({right: 290}, 400, thirdBrushLoop)
    }
    thirdBrushLoop()
})