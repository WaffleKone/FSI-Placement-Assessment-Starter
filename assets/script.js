let yourName = "Jaxon Johnson"

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// Declaring variables to ref elements in the order summary table
const gbQty = document.querySelector('#qty-gb')
const ccQty = document.querySelector('#qty-cc')
const sugarQty = document.querySelector('#qty-sugar')
const totalQty = document.querySelector('#qty-total')

// Declaring variable that will be used to update the footer credit section
const credit = document.querySelector('#credit')

// Declaring button variables
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')

const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')

const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')
// Code to update name display
credit.textContent = `Created by ${yourName}`
// Listeners for all of the gb, cc, and sugar + and - buttons
gbPlusBtn.addEventListener('click', function() {
    if (gb >= 0){
        gb += 1
        gbQty.textContent = (gb)
        totalQty.textContent = (gb+cc+sugar)
    }
})

gbMinusBtn.addEventListener('click', function(){
    if (gb > 0){
        gb -= 1
        gbQty.textContent = (gb)
        totalQty.textContent = (gb+cc+sugar)
    }
})

ccPlusBtn.addEventListener('click', function() {
    if (cc >= 0){
        cc += 1
        ccQty.textContent = (cc)
        totalQty.textContent = (gb+cc+sugar)
    }
})

ccMinusBtn.addEventListener('click', function(){
    if (cc > 0){
        cc -= 1
        ccQty.textContent = (cc)
        totalQty.textContent = (gb+cc+sugar)
    }
})

sugarPlusBtn.addEventListener('click', function() {
    if (sugar >= 0){
        sugar += 1
        sugarQty.textContent = (sugar)
        totalQty.textContent = (gb+cc+sugar)
    }
})

sugarMinusBtn.addEventListener('click', function(){
    if (sugar > 0){
        sugar -= 1
        sugarQty.textContent = (sugar)
        totalQty.textContent = (gb+cc+sugar)
    }
})