from functools import reduce

List = [1, 2, 3, 4, 5, 6, 7, 8, 9]

result = reduce(lambda a,b: a + b, 
                filter(lambda x: x%2 != 0, List ))

print(result)