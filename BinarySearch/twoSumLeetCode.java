//https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// EDGE CASES NOT DONE
class Solution {
    public int[] twoSum(int[] arr, int target) {
        int a1 = 0, a2 = 0,n=arr.length;
        int p = -1,l = 0, r = arr.length-1;
        
        while(l<=r){
            int mid = l + (r-l)/2;
            if(mid<n && arr[mid]<target){
                p = mid;
                l = mid+1;
            }else if(arr[mid]>target){
                r = mid - 1;
            }
        }
        int[] ar = new int[2];
        for(int i=0;i<=p;i++){
            int x = target - arr[i];
            int b = binSearch(arr,x,i+1,p);
            if(b>=0){
                
                ar[0] = i+1;
                ar[1] = b+1;
            }
        }
        return ar;
    }
    
    int binSearch(int[] arr,int target,int start,int end){
        while(start<=end){
            int mid = start+(end-start)/2;
            if(arr[mid]==target){
                return mid;
            }else if(arr[mid]>target){
                end = mid-1;
            }else{
                start = mid +1;
            }
        }
        return -1;
    }
}