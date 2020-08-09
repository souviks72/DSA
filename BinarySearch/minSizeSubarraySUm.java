//https://leetcode.com/problems/minimum-size-subarray-sum/
class Solution {
    public int minSubArrayLen(int s, int[] arr) {
        if(arr == null || arr.length==0)
            return 0;
        int j=0,i=0,sum=0,min = Integer.MAX_VALUE;
        while(j<arr.length){
            sum += arr[j++];
            
            while(sum>=s){
                min = Math.min(min,j-i);
                sum = sum - arr[i++];
            }
        }
        return min == Integer.MAX_VALUE? 0: min;
    }
}