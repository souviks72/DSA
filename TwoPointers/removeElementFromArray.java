//https://www.interviewbit.com/problems/remove-element-from-array/
public class Solution {
    public int removeElement(ArrayList<Integer> arr, int b) {
        int n = arr.size();
        int i=0,j=0;
        while(i<n && j<n){
            while(j<n && i<n && arr.get(i)!=b){
                arr.set(j,arr.get(i));
                j++;
                i++;
            }
            while(j<n && i<n && arr.get(i)==b)
                i++;
        }
        return j;
    }
}