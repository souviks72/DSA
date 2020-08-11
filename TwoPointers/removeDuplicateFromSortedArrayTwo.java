//https://www.interviewbit.com/problems/remove-duplicates-from-sorted-array-ii/
public class Solution {
    public int removeDuplicates(ArrayList<Integer> arr) {
        int n = arr.size();
        int i=1,c=1,j=1;
        int a = arr.get(0);
        
        while(i<n){
            if(i<n && arr.get(i)==a){
                if(c==1){
                    arr.set(j,a);
                    j++;
                    c++;
                    i++;
                }else{
                    while(i<n && arr.get(i)==a)
                        i++;
                    if(i<n){
                        int x = arr.get(i);
                        arr.set(j,x);
                        j++;
                        i++;
                        c=1;
                        a = x;
                    }
                }
            }else if(arr.get(i)!=a){
                int x = arr.get(i);
                arr.set(j,x);
                j++;
                i++;
                c=1;
                a = x;
            }
            
        }
        return j;
    }
}