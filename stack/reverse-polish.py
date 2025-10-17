class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        operators = set(["+", "-", "*", "/"])
        stack = []
        for token in tokens:
            if token in operators and len(stack) >= 2:
                b = int(stack.pop())
                a = int(stack.pop())
                match token:
                    case "+":
                        stack.append(a+b)
                    case "-":
                        stack.append(a-b)
                    case "*":
                        stack.append(a*b)
                    case "/":
                        stack.append(int(a/b))
            else:
                stack.append(token)
        return int(stack[0])
                    

