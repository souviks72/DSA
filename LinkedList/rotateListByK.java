/* node of linked list:

class Node{
    int data;
    Node next;
    Node(int d){
        data=d;
        next=null;
    }
}

*/

class Rotate{
    // This function should rotate list counter-
    // clockwise by k and return head node
    
    public Node rotate(Node head, int k) {
        Node t1 = head, t2 = null, t3 = head;
        for(int i=0;i<k-1;i++){
            t1 = t1.next;
        }
        
        if(t1.next==null)
            return head;
        head = t1.next;
        t2 = t1.next;
        t1.next = null;
        while(t2.next!=null)
            t2 = t2.next;
        t2.next = t3;
        return head;
    }
}
