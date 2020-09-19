// User function Template for Java

class Tree {
    /* Complete the function to get diameter of a binary tree */
    static int maxDiam = 0;
    int diameter(Node root) {
        return diam(root);
    }
    
    int diam(Node root){
        if(root==null)
            return 0;
        int lh = height(root.left);
        int rh = height(root.right);
        
        int d = lh+rh+1;
        int ld = diam(root.left);
        int rd = diam(root.right);
        return Math.max(Math.max(ld,rd),d);
        
    }
    
    int height(Node root){
        if(root == null)
            return 0;
        return 1 + Math.max(height(root.left),height(root.right));
    }
}
