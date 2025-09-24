from collections import OrderedDict

class LRUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache = OrderedDict()

    def get(self, key: int) -> int:
        # check if in cache
        if key not in self.cache:
            return -1
        else:
            self.cache.move_to_end(key)
            return self.cache[key]

    def put(self, key: int, value: int) -> None:
        #check if in cache
        # if so - update value, move to end
        if key in self.cache:
            self.cache.move_to_end(key)
            self.cache.update({key:value})
        # if not add to front
        else:
            self.cache.update({key:value})
        
        if len(self.cache) > self.capacity:
            self.cache.popitem(last=False)

