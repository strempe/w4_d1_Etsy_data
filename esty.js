console.log('1.');
// The average price is
var itemPrice = items.map(getItemPrice);
function getItemPrice(item) {
    return item.price;
}
var total = itemPrice.reduce(function(prev, next) {
    return prev + next;
}, 0);
console.log(Math.ceil((total/itemPrice.length) * 100) /100);


console.log('2.');
// Array of items between $14 and $18 USD
var selectItems = items.filter(function(item) {
  return item.price >= 14 && item.price <= 18 && item.currency_code === 'USD'
});
selectItems.forEach(function(item) {
    console.log(item.title)
});


console.log('3.');
// Item with a "GBP" currency code and print its name and price
var euroItems = items.filter(function(item){
    return item.price && item.currency_code === "GBP"
})
euroItems.forEach(function(item){
    console.log(item.title + ' £' + item.price);
})


console.log('4.');
//  items are made of wood
var woodItems = items.filter(function(item) {
    return item.materials.includes('wood')
});
woodItems.forEach(function(item) {
    console.log(item.title);
});

console.log('5.');
// items are made of eight or more materials
var materialItems = items.filter(function(item){
    return item.materials.length >= 8
})
materialItems.forEach(function(item){
    console.log(item.title + 'has' + item.materials.length + 'materials:' + item.materials.join('\n'))

})

console.log('6.');
// Calculate how many items were made by their sellers.
var sellers = items.filter(function(item){
    return item.who_made === 'i_did';
    // return item.who_made.includes('i_did')
});
    console.log(sellers.length + ' items were made by their seller.')






