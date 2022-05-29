class simpleGraph {
    constructor (){};
}

simpleGraph.Map = class Map{
    key   = {};
    value = {};
    length = 0;

    set(key , value){
        if(Array.isArray(key)){
            key.forEach(item => {
                const _k = String(item);
                if(this.key[_k]){
                    this.remove(this.key[_k]);
                } 
                this.key[_k] = String(this.length);
            });
            this.value[String(this.length)] = value;
        } else {
            if(this.key[String(key)]){
                this.remove(this.key[String(key)]);
            } 
            this.key[String(key)] = String(this.length);
            this.value[String(this.length)] = value;
        }
        this.length++;
        return this;
    }    

    get(key){
        if(typeof key === 'string'){
            return this.value[this.key[key]];
        } else {
            return this.value[this.key[String(key)]]
        }
    }

    remove(index){
        delete this.value[String(index)];
    }

    clear(){
        this.key = {};
        this.value = {};
        this.length = 0;
    }

    createGraph(){
       return new simpleGraph.Graph(this);
    }


}

simpleGraph.Graph = class Graph {
    graph = {};

    constructor(map){

        Object.keys(map.key).forEach(currentNode => {
            this.graph[currentNode] = [];
            map.value[map.key[currentNode]].forEach(nextNode => {
                this.graph[currentNode].push({node:nextNode, weight:0});
            });

        });

        return this;
    }

    findShortestPath(start, end){
        let path = [];
        let visited = {};
        let queue = [end];
        let currentNode;
        let found = false;
        let loop = true;
        while(loop){
            currentNode = queue.shift();
            if(currentNode === start){
                found = true;
                break;
            }
            visited[currentNode] = true;
            if(!this.graph[currentNode]){
                console.error('Node not found');
                break;
            }
            this.graph[currentNode].forEach(nextNode => {
                if(!visited[nextNode]){
                    queue.push(nextNode.node);
                }
            });
        }
        if(found){
            while(currentNode !== end){
                path.push(currentNode);
                currentNode = this.graph[currentNode][0].node;
            }
            path.push(end);
        }
        return path;
        
    }

    findShortestPathWithWeight(start, end){
        let path = [];
        let visited = {};
        let queue = [{node: start, weight: 0}];
        let currentNode;
        let found = false;
        let loop = true;
        while(loop){
            currentNode = queue.shift();
            if(currentNode.node === end){
                found = true;
                break;
            }
            visited[currentNode.node] = true;
            this.graph[currentNode.node].forEach(nextNode => {
                if(!visited[nextNode]){
                    queue.push({node: nextNode, weight: currentNode.weight + 1});
                }
            });
        }
        if(found){
            while(currentNode.node !== start){
                path.push(currentNode.node);
                currentNode = this.graph[currentNode.node][0];
            }
            path.push(start);
            path.reverse();
        }
        return path;
        
    }
}