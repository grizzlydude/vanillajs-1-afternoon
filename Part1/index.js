// console.log('hello')
const board = []


function play(clickId){
    const playerspan = document.getElementById('player')
    const clickedElement = document.getElementById(clickId)    
    if (playerspan.innerText === "X"){
        playerspan.innerText = "0"
        clickedElement.innerText = "X"
        board[clickId] = 'X'
    }
    else {
        playerspan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickId]= 'O'
    }
    console.log(board)
    
    const topRight = board[0]
    const topCenter = board[1]
    const topLeft = board[2]
    const middleRight = board[3]
    const middleCenter = board[4]
    const middleLeft = board[5]
    const bottomRight = board[6]
    const bottomCenter = board[7]
    const bottomLeft = board[8]
    
    // Win condions

    if (topRight !== undefined && topRight === topCenter && topRight === topLeft){
        alert(`${topRight} is the Winner`)
        return
    }
     if (middleRight !== undefined && middleRight === middleCenter && middleRight === middleLeft){
         alert(`${middleRight} is the Winner`)
         return 
     }  
    if (bottomRight !== undefined && bottomRight === bottomCenter && bottomRight=== bottomLeft){
        alert(`${bottomRight} is the Winner`)    
        return
    }
    if(topRight !== undefined && topRight === middleCenter && topRight === bottomLeft){
        alert(`${bottomRight} is the Winner`) 
        return 
    }
    if (topLeft !== undefined && topLeft === middleCenter && topLeft=== bottomRight){
        alert(`${topLeft} is the Winner`) 
        return 
    }
    if (topRight !== undefined && topRight === middleRight && topRight === bottomRight){
        alert(`${topRight} is the Winner`) 
        return 
    }
    if (topLeft !== undefined && topLeft === middleLeft && topLeft=== bottomLeft){
        alert(`${topLeft} is the Winner`) 
        return 
    }
    if (topCenter !== undefined && topCenter === middleCenter && topCenter=== bottomCenter){
        alert(`${topCenter} is the Winner`) 
        return 
    }
    let boardFull = true
    for (let i = 0; i < 8; i++){
        if(board[i] === undefined){
            return boardFull = false
        }
    }
    if (boardFull === true){
        alert (`Cat game, there are no winners`)
    }
    if ()
}

function rest(){
   return board = []
}
