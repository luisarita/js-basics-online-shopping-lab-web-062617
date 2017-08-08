var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function getRandom(min, max){
  return Math.round(Math.random() * (max - min) + min, 0)
}

function addToCart(item) {
  cart.push({ [item]: getRandom(1, 100) })
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  if (cart.length == 0){
    return console.log('Your shopping cart is empty.')
  }

  let list = [];

  cart.forEach(function(element, i){
    let item = Object.keys(element)[0];
    let price = element[item];

    list.push(`${item} at \$${price}`);
  });

  switch(list.length) {
    case 1:
    case 2:
      console.log(`In your cart, you have ${list.join(' and ')}.`);
      break;
    default:
      let allButLast = list.slice(0, cart.length -1)
      let last = list.slice(cart.length -1)
      console.log(`In your cart, you have ${allButLast.join(', ')}, and ${last}.`);
  }
}

function add(a, b){
  return a + b
}

function removeFromCart(item) {
  cart.forEach(function(element, i){
    if (element.hasOwnProperty(item)) {
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
      return cart
    }
  });

  console.log("That item is not in your cart.")
  return cart;
}

function total() {
  let total = 0;

  cart.forEach(function(element){
    for (let item in element) {
      total += element[item];
    }
  })

  return total;
}

function placeOrder(cardNumber) {
  if (cardNumber == null){
    console.log('Sorry, we don\'t have a credit card on file for you.' )
    return false
  } 

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  cart = []
}