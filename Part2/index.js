console.log('The house always wins!')

let idInput = document.getElementById('idInput');
let colorInput =  document.getElementById("colorInput");

console.log(idInput)
console.log(colorInput)

function setCard (){
    const card = document.getElementById(idInput.value)
    card.style.color = colorInput.value
}

function reset(){
    let cardReset = document.getElementsByTagName('section')
    console.log(cardReset)
    for (let i in cardReset){
        console.log(colorInput)
            cardReset.style.color = "grey";
    }
}
