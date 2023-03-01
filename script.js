// Write a function to determine if a person can afford an item. Write in simple if..else statement first and after that change to ternary.

let canAfford2 = (itemPrice, accountBalance) => {
    if(itemPrice > accountBalance) {
        return `Cannot afford! You are $${itemPrice - accountBalance} short`;
    } else {
        return "Oh you got this, your a rich person!"
    }
};
// console.log(canAfford2(15, 20));

// Changed to ternary operator
let canAfford = (itemPrice, accountBalance) => {
    return itemPrice > accountBalance 
    ? `Cannot afford! You are $${itemPrice - accountBalance} short`
    : "Oh you got this, your a rich person!";
};

let myaccountBalance = 1000;
const toyCar = 1001;
let toyCarOnSale = toyCar - toyCar * 0.05;

// console.log(canAfford(toyCar, myaccountBalance));
// console.log(canAfford(toyCarOnSale, myaccountBalance));