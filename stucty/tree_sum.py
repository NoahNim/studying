# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

def tree_sum(root):
  if not root:
    return 0
  
  stack = [root]
  sum = 0
  while stack:
    node = stack.pop()
    sum += node.val
    if node.right:
      stack.append(node.right)
    if node.left:
      stack.append(node.left)
  return sum