/*
class Node {
    int value;
    Node next;
    Node(int value) {
        this.value = value;
    }
}

*/

class ReverseLL
{
    // This function should reverse linked list and return
    // head of the modified linked list.
    Node reverseList(Node head)
    {
        Node current = head, prev = null, next = null;
        while(current.next!=null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        current.next = prev;
        return current;
    }
}
