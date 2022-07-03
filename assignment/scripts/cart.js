console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

function isFull() {
    if (basket.length < maxItems) {
        return false;
    }
    else {
        return true;
    }
}



// When this function is called, add input to basket array.

// Update the required `addItem` function to:
 // - Use the `isFull` function to prevent more than `maxItems` from being added to the basket. 
 // - If an item was added to the array, return `true`
 // - If there was no room and the item could not be added return `false`
function addItem(item) {
    if (typeof (item) == "string" && isFull() == false ) {
        basket.push(item);
        console.log('Item added:', item);
        return true;
    }
    else if 
        (typeof (item) == "string" && isFull() == true) {
            console.log('Basket is full!');
            return false;
        }
    
    else {
        console.log('Item must be food related!');
        return false;
    }
}
// List all basket items on separate lines.
function listItems() {
    console.log('Current list is:');
    for (let i = 0; i < basket.length; i++) {
        if (basket[i]) {
            console.log(basket[i]);
            basket.append;
        }
    }
}

// Create a function called `removeItem`. It should:
 // - Take an input parameter for a string `item`
 // - Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
 // - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
 // - Return the item removed or `null` if the item was not found

function removeItem(item) {
    let index = basket.indexOf(item);
    if (basket.includes(item)) {
        basket.splice(index, 1);
        console.log('Removed', item,);
    }
    else {
        console.log('Item does not exist in basket.');
        return null;
    }
}



function empty() {
    basket = [];
    console.log('You have emptied your basket.');
}
addItem(true); // both should not work
addItem(1);

addItem('banana');
addItem('apple');
addItem('orange');
addItem('banana');
addItem('apple');
addItem('orange');

listItems();

//empty();
//console.log(basket);



console.log('Is basket full?', isFull());

removeItem('banana');
removeItem('brownie')