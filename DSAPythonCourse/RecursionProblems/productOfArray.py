# the base case will be if the length of the array is 1, return the product
# recursive case:
# make array at 0th index equal to array at 0th index * the last element of array (array.pop)
# return productOfArray(arr)

def productOfArray(arr):
    if len(arr) == 1:
        return arr[0]
    else:
        arr[0] = arr[0] * arr.pop()
        return productOfArray(arr)
    
print(productOfArray([1,2,3])) #6
print(productOfArray([1,2,3,10])) #60