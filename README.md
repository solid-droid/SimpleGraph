# SimpleMap
Map / Graph datastructure - create graphs, traversing algorithms, many to many mapping, etc..

# Usage 
HTML
```html
    <script src="./simpleMap.js"></script>
```  
Javascript  
```javascript
  const myMap = new simpleMap.Map();
```

## Methods

### Many to Many map

Set data
```javascript
    // myMap.set([<key1> ,<key2>,...] , <values>);
    
    myMap.set([1,2,3],['hello','world']); //many to many
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
    myMap.clear();
    
    myMap.set(1 ,[4, 5]);
    myMap.set(2, [5]);
    myMap.set(4, [1, 5, 6]);
    myMap.set(5, [1, 2, 4]);
    myMap.set(6, [1, 4, 7]);
    myMap.set(7, [6]);
    
    const shortestPath = myMap.createGraph().findShortestPath(1, 7);
```
