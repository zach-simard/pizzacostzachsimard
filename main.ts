game.splash("Welcome to MR. Simard's pizza parlour!")
let diameter = game.askForNumber("what diameter of pizza would you like (inch)?")
let RENT = 1
let LABOUR_COST = 0.75
let MATERIALS = 0.5
let HST = 0.13
let subtotal = LABOUR_COST + RENT + MATERIALS * diameter
let TAX = subtotal * HST
let total = subtotal + TAX
total = total * 100
total = Math.round(total)
total = total / 100
game.splash("The subtotal of your pizza is " + subtotal + " dollars, with an HST of 13% of the total price of the pizza is " + total + " dollars ")
