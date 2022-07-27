# class Node:
#   def __init__(self, val):
#     self.val = val
#     self.left = None
#     self.right = None

def iterative_max_path_sum(root):
  if not root.right and not root.left:
    return root.val
  
  stackRight = [root.right]
  stackLeft = [root.left]
  sumRight = 0
  sumLeft = 0
  
  sumLeft += root.val
  sumRight += root.val
  
  while stackRight:
    node = stackRight.pop()
    rightNode = node.right
    leftNode = node.left
    
    sumRight += node.val
    
    if rightNode:
      if leftNode:
        if leftNode.val > rightNode.val:
          stackRight.append(leftNode)
      else:
        stackRight.append(rightNode)
  while stackLeft:
    node = stackLeft.pop()
    rightNode = node.right
    leftNode = node.left
    # print(sumLeft + node.val)
    sumLeft += node.val
        
    if leftNode:
      if rightNode:
        if leftNode.val > rightNode.val:
          stackLeft.append(leftNode)
        else:
          stackLeft.append(rightNode)
      else:
        stackLeft.append(leftNode)
    
  if sumRight > sumLeft:
    return sumRight
  else:
    return sumLeft