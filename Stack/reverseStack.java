import java.util.*;
public class Main {
    public static void main(String[] args) {
        Stack<Integer> st = new Stack();
	    for(int i=1;i<=10;i++){
	        st.push(i);
	    }
	    
	    Stack<Integer> s = reverse(st);
	    while(!s.empty()){
	        System.out.println(s.pop());
	    }
    }
    
    public static Stack<Integer> reverse(Stack<Integer> s){
        int x = s.pop();
        if(s.empty()){
            s.push(x);
            return s;
        }
        s = reverse(s);
        s = insert(s,x);
        
        return s;
    }
    
    public static Stack<Integer> insert(Stack<Integer> s,int x){
        if(s.empty()){
            s.push(x);
            return s;
        }
        
        int a = s.pop();
        s = insert(s,x);
        s.push(a);
        return s;
    }
}