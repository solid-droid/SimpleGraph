const map = new simpleGraph.Map();

////////////// -- many to one mapping -- //////////////
// myMap.set([<key1> ,<key2>,...] , <values>);
map.set(1 , [2,4])
   .set(2, [3])
   .set(4, [1])
   .set(3, [4])

const graph = map.createGraph();

const path = graph.findShortestPath(2, 4);
console.log(path);
