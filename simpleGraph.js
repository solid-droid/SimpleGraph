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
                this.key[_k] = String(this.length);
            });
            this.value[String(this.length)] = value;
        } else {
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
}

simpleGraph.Graph = class Graph {
    nodeDetails = {};
    adjecencyList = {};
    constructor(){
    }


    setNode(node, info={}){
        this.nodeDetails[node] = info;
        return this;
    }

    getNode = (node) => this.nodeDetails[node];

    setEdge(startNode, endNode, info = {}){
            info.weight ??= 1;
            if(!this.adjecencyList[startNode]){
                this.adjecencyList[startNode] = {};
            }
            this.adjecencyList[startNode][endNode] = {
                node: endNode,
                nodeInfo: this.nodeDetails[endNode],
                edgeInfo: info
            };
        return this;
    }

    removeEdge(startNode, endNode){
        delete this.adjecencyList[startNode][endNode];
        return this;
    }

    removeNode(node){
        delete this.nodeDetails[node];
        delete this.adjecencyList[node];
        Object.keys(this.adjecencyList).forEach(currentNode => {
            if(this.adjecencyList[currentNode][node]){
                delete this.adjecencyList[currentNode][node];
            }
        });
        return this;
    }

    getEdge = (startNode, endNode) => this.adjecencyList[startNode]?.[endNode];


    paths(startNode, endNode = null){
        let path = [startNode];
        let queue = [[startNode]];
        let pathList = [];

        while(queue.length){
            path = queue.shift();
            const last = path[path.length-1];
            if(last === endNode || endNode === null){
                pathList.push(path);
            }

            Object.keys(this.adjecencyList[last] || {}).forEach(nextNode => {
                if(!path.includes(nextNode)){
                    queue.push([...path, nextNode]);
                }
            })
        }
        return pathList;

    }

    shortestPath(startNode, endNode){
        return this.paths(startNode, endNode).reduce((a,b) => a.length < b.length ? a : b);

    }
}

