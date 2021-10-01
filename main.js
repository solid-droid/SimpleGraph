const myMap = new simpleMap.Map();

////////////// -- many to many mapping -- //////////////
// myMap.set([<key1> ,<key2>,...] , <values>);
myMap.set(1 ,[4, 5]);
myMap.set(2, [5]);
myMap.set(4, [1, 5, 6]);
myMap.set(5, [1, 2, 4]);
myMap.set(6, [1, 4, 7]);
myMap.set(7, [6]);

const paths = myMap.createGraph().findShortestPath(1, 7);

console.log(paths);