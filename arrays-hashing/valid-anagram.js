class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }
        const sMap = new Map()
        const tMap = new Map()


        for(const ch of s){
            sMap.set(ch, (sMap.get(ch) || 0) + 1)
        }
        
        for(const ch of t){
            tMap.set(ch, (tMap.get(ch) || 0) + 1)
        }
    
        for(const [key,val] of sMap){
            if(val!== tMap.get(key)){
                return false
            }
        
        }
        return true
    }
}
