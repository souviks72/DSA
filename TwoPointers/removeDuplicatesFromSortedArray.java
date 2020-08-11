//https://www.interviewbit.com/problems/remove-duplicates-from-sorted-array/
public class Solution {
    public int removeDuplicates(ArrayList<Integer> arr) {
        int n = arr.size();
        int i=1,c=1;
        int a = arr.get(0);
        while(i<n){
            while(i<n && arr.get(i)==a){
                i++;
            }
            if(i<n){
                a = arr.get(i);
                arr.set(c,a);
                c++;
                i++;
            }
            
        }
        return c;
    }
}