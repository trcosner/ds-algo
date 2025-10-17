class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const operators = new Set(["+", "-", "*", "/"])
        const stack = []
        for (let i = 0; i < tokens.length; i++){
           const token =  tokens[i]
           if(operators.has(token) && stack.length >= 2){
                const b = Number(stack.pop())
                const a = Number(stack.pop())
                switch (token) {
                    case "+": stack.push(a + b); break;
                    case "-": stack.push(a - b); break;
                    case "*": stack.push(a * b); break;
                    case "/": stack.push(Math.trunc(a / b)); break; // truncate toward 0
                }
           }
           else{
            stack.push(token)
           }
        }
        return stack[0]
    }
}
