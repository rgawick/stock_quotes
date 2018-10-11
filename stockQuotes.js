let stockTextBox = document.getElementById("stockTextBox")
let display = document.getElementById("display")
let button = document.getElementById("button")


let quotes = {
  "APLE":{name : "Apple", price : 0},
  "AMAZ":{name : "Amazon", price :0},
  "ALBAB":{name : "Ali Baba", price :0},
  "GOOG":{name : "Google", price :0},
  "FB":{name : "Facebook", price :0}
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function getStockQuote(symbol) {

  let stock = quotes[symbol]
  stock.price = getRandomInt(100,500)
  return quotes[symbol]
}


button.addEventListener("click", function(){

setInterval(function(){

  let textBoxValue = stockTextBox.value
  let object = getStockQuote(textBoxValue)

  let listing = `
  <li>
      <p>${object.name}</p>
      <p>${object.price}</p>
    </li>
  `
display.innerHTML = listing
},2000)

})
