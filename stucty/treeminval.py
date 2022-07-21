from collections import deque

def tree_min_value(root):
  queue = deque([root])
  min_val = root.val
  
  while queue:
    node = queue.popleft()
    if node.val < min_val:
      min_val = node.val
    if node.right:
      queue.append(node.right)
    if node.left:
      queue.append(node.left)
  return min_val