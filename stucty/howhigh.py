# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

def how_high(node):
  if node is None:
    return -1
  
  right_height = 0
  left_height = 0
  
  stack_right = [node.right]
  left_stack = [node.left]
  
  if stack_right != [None]:
    while stack_right:
      node = stack_right.pop()
      left_node = node.left  
      right_node = node.right 


      right_height += 1

      if right_node:
        if left_node: 
          if left_node.left or left_node.right:
            stack_right.append(left_node)
        else:
          stack_right.append(right_node)
  else:  
    pass
  
  if left_stack != [None]: 
    while left_stack:
      node = left_stack.pop()
      left_node = node.left  
      right_node = node.right 
      left_height += 1

      if left_node:
        if right_node:
          if right_node.right or right_node.left:
            left_stack.append(right_node)
        else:
          left_stack.append(left_node)
  else:
    pass
          
  if right_height >= left_height:
    return right_height
  if left_height > right_height:
    return left_height
    