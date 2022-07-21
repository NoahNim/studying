from collections import deque

def tree_includes(root, target):
  if not root:
    return False
  queue = deque([root])
  
  while queue:
    node = queue.popleft()
    if node.val == target:
      return True
    if node.right:
      queue.append(node.right)
    if node.left:
      queue.append(node.left)
  return False