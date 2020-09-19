class Node
{
    int data;
    Node left, right;

    Node(int item)
    {
        data = item;
        left = right = null;
    }
}
 */

class Tree
{
    // return the Height of the given Binary Tree
    int height(Node root) 
    {
        int h = util(root);
        return h;
    }   
    
    int util(Node root){
        if(root==null)
            return 0;
        return Math.max(util(root.left),util(root.right)) +1;
    }
}
