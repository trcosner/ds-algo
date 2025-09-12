class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.map = new Map()
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        const match = this.map.get(key)
        if(!this.map.has(key)){
            return -1
        }
        this.map.delete(key)
        this.map.set(key,match)
        return match
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if(this.map.has(key)){
            this.map.delete(key)
            this.map.set(key, value)
        }
        else{
            if(this.map.size === this.capacity){
                const oldest = this.map.keys().next().value
                console.log(oldest)
                this.map.delete(oldest)
            }
            this.map.set(key,value)
        }
    }
}

