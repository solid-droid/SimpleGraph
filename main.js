console.log('Map---------->');
const map = new simpleGraph.Map();
map.set(['a','b'], [4,5,6])
   .set(['b','c'], [7,8,9]);

const a = map.get('a'); // [4,5,6]
const b = map.get('b'); // [7,8,9]
const c = map.get('c'); // [7,8,9]
console.log(a,b,c);


console.log('Graph-------->');
const graph = new simpleGraph.Graph();
graph.setEdge('A', 'B')
     .setEdge('A', 'C')
     .setEdge('B', 'C')
     .setEdge('B', 'D')
     .setEdge('D', 'C')
     .setEdge('C', 'A')
     .setEdge('C', 'D')
     .setEdge('D', 'E')
     .setEdge('B', 'E')

const paths = graph.paths('B', 'E');
const shortest = graph.shortestPath('B', 'E');
console.log(paths, shortest);

