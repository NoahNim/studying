# Recursion is way of solving a problem by having a function call itself. A real life example would be that of a Russian doll.

# - Performing the same operation multiple times with different inputs
# - In every step we smaller inputs to make the problem small. Every time the problem becomes smaller the closer it gets to the solution.
# - Base condition is needed to stop the recursion, otherwise infinite loop will occur.

def openRussianDoll(doll):
    if doll == 1:
        print("All dolls are opened")
    else:
        openRussianDoll(doll-1)