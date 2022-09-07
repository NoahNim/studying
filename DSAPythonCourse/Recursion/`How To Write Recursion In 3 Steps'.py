# Using the factorial problem recursively
# Factorial
# Example: 4! = 4*3*2*1=24
# Example 2: 10! = 10*9*8*7*6*5*4*3*2*1=38,28,000
# Base factorial equation: n! = n(n-1)*(n-2)*...*2*1

# Step 1: Recursive case - the flow
# n! = n(n-1)*(n-2)*...*2*1 is (n-1)!factorial
# or.... (n-1)! = (n-1)*(n-1-1)*(n-1-2)*...*2*1 then= (n-1)*(n-2)*(n-3)*...*2*1

# Step 2: Base case - the stopping criteria

# Step 3: Unintentional case - the constraint
# In case of factorial, factorials only are calculated for positive numbers. 
# A constraint is negative numbers shouldn't be calculated

def factorial(n):
    assert n>=0 and int(n) == n, 'The number must be a positive integer only' # This gives the constraint of 
    # n being a positive number 
    # or an error is thrown
    if n in [0,1]:
        return 1 # base case
    else:
        return n*factorial(n-1) # recursive case. with just recursive case this is a bug

