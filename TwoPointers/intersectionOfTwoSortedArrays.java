//https://www.interviewbit.com/problems/intersection-of-sorted-arrays/
public class Solution {
    // DO NOT MODIFY THE LIST. IT IS READ ONLY
    public ArrayList<Integer> intersect(final List<Integer> arr, final List<Integer> brr) {
        ArrayList<Integer> ans = new ArrayList<>();
        int an = arr.size();
        int bn = brr.size();
        int i=0,j=0;
        while(i<an && j<bn){
            if((arr.get(i)-brr.get(j))==0){
                ans.add(arr.get(i));
                i++;
                j++;
            }else{
                while(i<an && j<bn && arr.get(i)<brr.get(j)){
                    i++;
                }
                while(i<an && j<bn && brr.get(j)<arr.get(i)){
                    j++;
                }
            }
        }
        return ans;
    }
}