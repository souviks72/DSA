//DELETE MIDDLE ELEMENT OF STACK
class Geeks
{
    //Complete this function
    public Stack<Integer> deleteMid(Stack<Integer> s,int sizeOfStack,int current)
    {
        int mid = sizeOfStack/2 + 1;
        
        return delStack(s,mid-1);
    } 
    
    public Stack<Integer> delStack(Stack<Integer> s,int p){
        if(p==0){
            s.pop();
            return s;
        }
        
        int a = s.pop();
        s = delStack(s,p-1);
        s.push(a);
        return s;
    }
}
