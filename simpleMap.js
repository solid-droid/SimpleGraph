class simpleMap {
    constructor (){};
}

simpleMap.Map = class Map{
    key   = {};
    value = {};
    graph = {};
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
    }    

    get(key){
        return this.value[this.key[String(key)]]
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
        Object.keys(this.key).forEach(currentNode => {
            this.graph[currentNode] = [];
            this.value[this.key[currentNode]].forEach(nextNode => {
                this.graph[currentNode].push(nextNode);
            });

        });

        return this;
    }

    findShortestPath(start, end){
        let path = [];
        let visited = {};
        let queue = [start];
        let currentNode;
        let nextNode;
        let found = false;
        let loop = true;
        while(loop){
            currentNode = queue.shift();
            if(currentNode === end){
                found = true;
                break;
            }
            visited[currentNode] = true;
            this.graph[currentNode].forEach(nextNode => {
                if(!visited[nextNode]){
                    queue.push(nextNode);
                }
            });
        }
        if(found){
            while(currentNode !== start){
                path.push(currentNode);
                currentNode = this.graph[currentNode][0];
            }
            path.push(start);
            path.reverse();
        }
        return path;
        
    }

    findShortestPathWithWeight(start, end){
        let path = [];
        let visited = {};
        let queue = [{node: start, weight: 0}];
        let currentNode;
        let nextNode;
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