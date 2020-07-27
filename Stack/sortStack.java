/*Complete the function below*/
// GIVEN A STACK SORT IT USING RECURSION ONLY
class GfG{
	public Stack<Integer> sort(Stack<Integer> s)
	{
		return sortUtil(s);
	}
	
	Stack<Integer> sortUtil(Stack<Integer> s){
	    if(s==null || s.empty()){
		    return s;
		}
		int x = s.pop();
		s = sortUtil(s);
		s = insert(s,x);
		return s;
	}
	
	Stack<Integer> insert(Stack<Integer> s,int x){
	    if(s.empty() || s.peek()<=x){
	        s.push(x);
	        return s;
	    }
	    
	    int a = s.pop();
	    s = insert(s,x);
	    s.push(a);
	    return s;
	}
}