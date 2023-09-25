// Write your solution in this file!
var customerName ="Bazu"
const leastFavoriteCustomer = 'My ex'

function changeToUppercase(customerName){
    return customerName.toUpperCase()
}
console.log(changeToUppercase(customerName))

function setBestCustomer(){
    var bestCustomer = 'not bob'
    return bestCustomer
}
console.log(setBestCustomer())

function overwriteBestCustomer(){
    bestCustomer = 'not me'
    return bestCustomer
}

console.log(overwriteBestCustomer())

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'U'
    return leastFavoriteCustomer
}

console.log(changeLeastFavoriteCustomer())
