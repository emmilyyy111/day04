const calcSalestax = require('./salesTax')
const calcTemp = require('./calcTemp')

const teslaPrice = 10000
const audi = 1299
const ford = 800

calcSalestax(teslaPrice)
calcSalestax(audi)
calcSalestax(ford)


calcTemp(21)