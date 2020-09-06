/*node class of the linked list

class Node
{
    int data;
    Node next;
    Node(int key)
    {
        data = key;
        next = null;
    }
}

*/

class GfG
{
    public static Node reverse(Node head, int k)
    {
        int c=0;
        Node current = head,prev = null,next = null;
        while(c<k && current!=null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            c++;
        }
        
        if(current!=null){
            head.next = reverse(next,k);
        }
        
        return prev;
    }
}