
hasDuplicate(nums) {
    const numsDict = {}

    for(let num of nums){
            if(!!numsDict[num]){
            return true
        }
        numsDict[num] = true
    }
    return false
}

// O(n) time complexity O(n) space complexity