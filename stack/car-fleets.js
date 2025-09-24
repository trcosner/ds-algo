class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = position.map((pos, idx) => {
            return {pos, spd: speed[idx]}
        })

        cars = cars.sort((a,b) => b.pos - a.pos) // desc
        const stack = []

        cars.forEach(({pos, spd}) => {
            const time = (target-pos)/spd
            console.log(time)
            if(stack.length === 0 || time > stack[stack.length-1]){
                stack.push(time)
            }
        })
        
        return stack.length
    }
}
