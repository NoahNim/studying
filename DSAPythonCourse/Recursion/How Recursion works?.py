# 1. A method calls itself
# 2. Exit from infinite loop
# Here is the basic syntax for recursion:

# def recursiveMethod(parameters):
#     if condition for exit: # exit from the condition satisfied
#         return something
#     else recursiveMethod(modified parameter) # calls itself repeatedly until exit condition is met
    
def recursiveMethod(n):
    if n<1:
        print("n is less than 1")
    else:
        recursiveMethod(n-1)
        print(n)

recursiveMethod(4)
# The recursion then does the following:
# recursiveMethod(4)
# recursiveMethod(3)
# recursiveMethod(2)
# recursiveMethod(1)
# recursiveMethod(0)