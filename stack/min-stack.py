import uuid

# Generate a random UUID (Version 4)
class Node:
    def __init__(self, val, nextNode):
        self.id = uuid.uuid4()
        self.nextNode = nextNode
        self.minSoFar = val if nextNode is None else min(val, nextNode.minSoFar)
        self.value = val

class MinStack:

    def __init__(self):
        self.head = None

    def push(self, val: int) -> None:
        self.head = Node(val, self.head)

    def pop(self) -> None:
        if not self.head:
            return
        self.head = self.head.nextNode

    def top(self) -> int:
        return self.head.value
        

    def getMin(self) -> int:
        return self.head.minSoFar
        
