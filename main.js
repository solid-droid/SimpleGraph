const map = new simpleGraph.Map();

////////////// -- many to one mapping -- //////////////
// myMap.set([<key1> ,<key2>,...] , <values>);
map.set(1 ,[4, 5])
     .set(2, [5])
     .set(4, [1, 5, 6])
     .set(5, [1, 2, 4])
     .set(6, [1, 4, 7])
     .set(7, [6])

const paths = map.createGraph().findShortestPath(1, 7);

console.log(paths);