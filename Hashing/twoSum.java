//https://www.interviewbit.com/problems/2-sum/
public class Solution {
    // DO NOT MODIFY THE ARGUMENTS WITH "final" PREFIX. IT IS READ ONLY
    public int[] twoSum(final int[] arr, int t) {
        HashMap<Integer,Integer> hm = new HashMap();
        int n = arr.length;
        int ans[] = new int[2];
        ans[1] = 999;
        for(int i=0;i<n;i++){
            hm.put(t-arr[i],i);
        }
        for(int i=0;i<n;i++){
            int a = arr[i];
            if(hm.containsKey(a)){
                int x = i+1;
                int y = hm.get(a)+1;
                if(y<ans[1]){
                    ans[0] = i+1;
                    ans[1] = hm.get(a)+1;
                }else if(y==ans[1]){
                    if(x<ans[0]){
                        ans[0] = i+1;
                        ans[1] = hm.get(a)+1;
                    }
                }
            }
        }
        return ans;
    }
}