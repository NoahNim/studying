def factorial(num):
    if num < 0 or type(num) is not int:
        return 'Number must be positive integer'
    if num in [0,1]:
        return num
    else:
        return num * factorial(num-1)
    
    
    
print(factorial(7))