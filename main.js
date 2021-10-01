const myMap = new simpleMap();

////////////// -- many to many mapping -- //////////////
// myMap.set([<key1> ,<key2>,...] , <values>);
myMap.set([1,2,3],['hello']);
myMap.set(['hh',4, [1,3,4]],'next');

console.log(myMap.get(1));
// ['hello']
console.log(myMap.get([1,3,4]));
// 'next'