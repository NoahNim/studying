# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

def iterative_max_path_sum(root):
  if not root.right and not root.left:
    return root.val
  
  stack_right = [root.right]
  stack_left = [root.left]
  sum_right = 0
  sum_left = 0
  
  sum_left += root.val
  sum_right += root.val
  
  while stack_right:
    node = stack_right.pop()
    right_node = node.right
    left_node = node.left
    sum_right += node.val
    
    if righ_node:
      if left_node:
        if left_node.val > right_node.val:
          stackRight.append(left_node)
      else:
        stackRight.append(right_node)
  while stack_left:
    node = stack_left.pop()
    right_node = node.right
    left_node = node.left
    sum_left += node.val
        
    if left_node:
      if right_node:
        if left_node.val > right_node.val:
          stackLeft.append(left_node)
        else:
          stackLeft.append(right_node)
      else:
        stackLeft.append(left_node)
    
  if sum_right > sum_left:
    return sum_right
  else:
    return sum_left

def recursive_max_path_sum(root):
    if root is None:
        return float("-inf")
    if root.right is None and root.left is None:
        return root.val
    max_left = recursive_max_path_sum(root.left)
    max_right = recursive_max_path_sum(root.right)
    return root.val + Max(max_left, max_right)