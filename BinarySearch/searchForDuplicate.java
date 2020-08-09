//https://leetcode.com/problems/find-the-duplicate-number/
class Solution {
    public int findDuplicate(int[] arr) {
        Arrays.sort(arr);
        int x = 0;
        for(int i=1;i<arr.length;i++){
            if(arr[i]==arr[i-1]){
                x = arr[i];
                break;
            }
        }
        return x;
    }
}
    
