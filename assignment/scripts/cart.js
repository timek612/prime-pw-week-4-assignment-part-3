console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

// When this function is called, add input to basket array.
function addItem(item) {
    if (typeof (item) == "string") {
        basket.push(item);
        console.log('Item added:', item);
        return true;
    }
    else {
        console.log('Item must be food related!');
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

function empty() {
    basket = [];
    console.log('You have emptied your basket.');
}
addItem(true);
addItem(1);
addItem('banana');
addItem('apple');
addItem('orange');
listItems();

//empty();
//console.log(basket);





