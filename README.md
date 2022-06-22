# SimpleGraph
Map / Graph datastructure - create graphs, find paths, etc.

# Features
- **many to one mapping** and **many to many**
- **graph** data structure 
- inbuilt path finders in graph
- weighted path finders

# Usage 
HTML
```html
    <script src="./simpleGraph.js"></script>
```  

### Map (Many to One)

Set data
```javascript
    // myMap.set([<key1> ,<key2>,...] , <values>);
    const myMap = new simpleGraph.Map();
    myMap.set([1,2,3],['hello','world']); //many to one
    myMap.set(['hh',4, [1,3,4]],'next');  //many to one
    myMap.set('hello' , 'world');         //one  to one
```
Get data   

```javascript
    console.log(myMap.get(1));
    // ['hello','world']
    console.log(myMap.get([1,3,4]));
    // 'next'
    console.log(myMap.get('hello'));
    // 'world'
```

### Graph (Many to Many)

```javascript
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
```
