class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        // sort nums into buckets where index represents number of occurances
        // [[],[100], [1,2,3], [],[7]]
        // nothing occurs 0 times, 100 occurs once, 1,2,3 all 2 times, 7 5 times
        // start at the end of the array and grab the top k items
        
        // keep track of occurence counts
        const count = new Map()
        
        // setting up buckets
        const freq = [[]]
        for(let i = 0; i < nums.length; i++){
            freq.push([])
            count.set(nums[i], (count.get(nums[i]) || 0) + 1)
        }
        
        // sort counts into buckets
        for(const [key, val] of count){
            console.log("test", {freq, val})
            freq[val].push(key)
        }
        const results = []

        //get top k nums from buckets, so start from the end
        for(let a = freq.length - 1; a > 0; a--){
            while (freq[a].length > 0 && results.length <= k){
                const val = freq[a].pop()
                results.push(val)
                k -= 1
                console.log({bucketLength: freq[a].length, results})
            }
        }
        return results
    }
}
