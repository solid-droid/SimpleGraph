class simpleMap {
    key   = {};
    value = {};
    length = 0;
    constructor (){};

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
    }    

    get(key){
        return this.value[this.key[String(key)]]
    }

    clear(){
        this.key = {};
        this.value = {};
        this.length = 0;
    }
}