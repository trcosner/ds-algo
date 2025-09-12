class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.capacity = capacity
        this.head = null
        this.tail = null
        this.map = new Map()
    }

    static Node = class{
        constructor(key, value, nextNode, prevNode){
            this.key = key
            this.value = value
            this.nextNode = nextNode
            this.prevNode = prevNode
        }
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        console.log('get', {key, map: this.map, class: this})
        if(this.map.has(key)){
           this.moveToTail(key)
           return this.map.get(key).value
        }
        return -1
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        const existing = this.map.get(key);
    
        let newNode = null
        if(!this.head){
           newNode = new LRUCache.Node(key, value, null, null)
           this.map.set(key, newNode)
           this.head = newNode
           this.tail = newNode
        }
        else if(this.map.has(key)){
            this.map.get(key).value = value
            this.moveToTail(key)
        }
        else {
            const oldTail = this.tail
            newNode = new LRUCache.Node(key, value, null, oldTail)
            this.map.set(key, newNode)
            oldTail.nextNode = newNode
    
            this.tail = newNode
        }

        while (this.map.size > this.capacity) {
            if(!this.head){
                return
            }
            const oldHead = this.head
            this.head = oldHead.nextNode || null
            if(this.head){
                this.head.prevNode = null
            }
            else{
                this.tail = null
            }
      
            this.map.delete(oldHead.key);
        
        }
    }

    moveToTail(key){
        const match = this.map.get(key)
        if (!match || match === this.tail) return;
        if(match.prevNode){
            match.prevNode.nextNode = match.nextNode
        }
        else{
            this.head = match.nextNode
        }// is head
        if(match.nextNode){
            match.nextNode.prevNode = match.prevNode
        }

        match.prevNode = this.tail
        match.nextNode = null
        if(this.tail){
            this.tail.nextNode = match
        }
        this.tail = match
        if(!this.head){
            this.head = match
        }
    }
}

