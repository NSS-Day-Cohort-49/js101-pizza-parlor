// JS 101: It's all about the data!

const toppings = [] // name price
const crusts = [
  {
    id: 1,
    type: "deep dish",
    price: 2
  },
  {
    id: 2,
    type: "NY style",
    price: 1
  },
  {
    id: 3,
    type: "traditional hand tossed",
    price: 0
  }
]

const sizes = [
  {
    id: 1,
    circumference: 12,
    price: 7
  },
  {
    id: 2,
    circumference: 14,
    price: 10
  },
  {
    id: 3,
    circumference: 16,
    price: 12
  }
]

// Some way to automagically add a unique id to a topping
// This is a function definition
const calcId = (arr) => {
  const lastIndex = arr.length - 1
  if (lastIndex === -1) {
    // return always ends the function
    const newId = 1
    return newId
  }
  const lastItemId = arr[lastIndex].id
  const newId = lastItemId + 1
  return newId
}

// Just like this assignment means that x = 4 and NOT '2 + 2'...
let x = 2 + 2

// ...this assigment means newId is the result of calling calcId. newId does not equal the function itself
const newId = calcId(sizes)
// console.log(newId)

// one way to create and populate an obj
const pep = {}
pep.name = "pepperoni"
pep.price = 1.5
pep.flavor = "greasy"
pep.id = calcId(toppings)

toppings.push(pep)
// OR.....

const blackOlives = {
  name: "black olives",
  price: 1.25,
  flavor: {descriptions: ["gross", "yuck"]},
  id: calcId(toppings)
}
// console.log('gross?', blackOlives.flavor.descriptions[1]);

// What will happen!!?
toppings.push(blackOlives)
// console.log('toppings', toppings);


// Won't cause an error. Const doesn't care about the values internal to an obj
pep.price = 5
// console.log("pepperoni obj", pep.price)

// will cause an error. Can't reassign the value of pep when using const
// pep = "hello"

let foo = "hello"
// won't cause an error
foo = 4


const buildPizzaOrder = (myCrust, myTopping, mySize) => {
  const pizza = {
    crust: myCrust,
    topping: myTopping,
    size: mySize,
    totalPrice: 0
  }

  for (const crustObj of crusts) {
    if ( crustObj.type === myCrust) {
      pizza.totalPrice = pizza.totalPrice + crustObj.price
    }
  }

  for (const toppingObj of toppings) {
    if ( toppingObj.name === myTopping) {
      pizza.totalPrice = pizza.totalPrice + toppingObj.price
    }
  }

  for (const sizeObj of sizes) {
    if ( sizeObj.circumference === mySize) {
      pizza.totalPrice = pizza.totalPrice + sizeObj.price
    }
  }


  return pizza
}


const pizza = buildPizzaOrder("deep dish", "pepperoni", 12)
console.log(`You ordered a ${pizza.size}-inch ${pizza.crust} ${pizza.topping} pizza. Your total is $${pizza.totalPrice.toFixed(2)}`)
