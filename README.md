# SimpleGraph
Map / Graph datastructure - create graphs, find paths, etc.

# Why
- **many to many** and **many to one mapping**
- **graph** data structure 
- inbuilt path finders in graph
- weighted path finders

# Usage 
HTML
```html
    <script src="./simpleGraph.js"></script>
```  
Javascript  
```javascript
  const myMap = new simpleMap.Map();
```

## Methods

### Many to one map

Set data
```javascript
    // myMap.set([<key1> ,<key2>,...] , <values>);
    
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

### Graph

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
