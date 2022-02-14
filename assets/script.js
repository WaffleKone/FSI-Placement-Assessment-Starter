let yourName = "Jaxon Johnson"

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// Declaring button variables
const credit = document.querySelector('#credit')

const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')

const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')

const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')
// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    if (gb >= 0){
        gb += 1
        console.log(gb)
    }
})

gbMinusBtn.addEventListener('click', function(){
    if (gb > 0){
        gb -= 1
        console.log(gb)
    }
})

ccPlusBtn.addEventListener('click', function() {
    if (cc >= 0){
        cc += 1
        console.log(cc)
    }
})

ccMinusBtn.addEventListener('click', function(){
    if (cc > 0){
        cc -= 1
        console.log(cc)
    }
})

sugarPlusBtn.addEventListener('click', function() {
    if (sugar >= 0){
        sugar += 1
        console.log(sugar)
    }
})

sugarMinusBtn.addEventListener('click', function(){
    if (sugar > 0){
        sugar -= 1
        console.log(sugar)
    }
})


// TODO: Hook up event listeners for the rest of the buttons