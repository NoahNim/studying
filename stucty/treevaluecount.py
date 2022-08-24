# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

def tree_value_count(root, target):
  if root is None:
    return 0
  
  count = 0
  stack = [root]
  
  while stack:
    node = stack.pop()
    if node.val == target:
      count += 1
    if node.right:
      stack.append(node.right)
    if node.left:
      stack.append(node.left)
  
  return count
  