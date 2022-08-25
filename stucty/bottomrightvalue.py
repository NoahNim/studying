# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

## make a stack
## while stack
## determine if node is a right node and set the bottom variable to that node

from collections import deque

def bottom_right_value(root):
  bottom = root.val
  
  if root.right or root.left:
    stack_right = [root.right]
    stack_left = [root.left]
    bottom_right = root.right
    bottom_left = root.left
    bottom_r_count = 0
    bottom_l_count = 0
  
    while stack_right:
      node = stack_right.pop()

      if node.right:
        bottom_right = node.right.val
        stack_right.append(node.right)
        bottom_r_count += 1
      if node.left:
        stack_right.append(node.left)
        bottom_right = node.left.val
        bottom_r_count += 1
      
    while stack_left:
      node = stack_left.pop()

      if node.right:
        bottom_left = node.right.val
        stack_left.append(node.right)
        bottom_l_count += 1
      if node.left:
        stack_left.append(node.left)
      
    print(bottom_l_count)
    print(bottom_r_count)

    if bottom_r_count > bottom_l_count:
      bottom = bottom_right
    if bottom_l_count > bottom_r_count:
      bottom = bottom_left
    if bottom_l_count == bottom_r_count:
      bottom = bottom_right
    
  return bottom