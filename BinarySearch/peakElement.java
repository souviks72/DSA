//https://leetcode.com/problems/find-peak-element/
class Solution {
    public int findPeakElement(int[] arr) {
        int n = arr.length;
        if(n==0)
            return -1;
        if(n==1)
            return 0;
        if(n==2){
            return arr[0]>arr[1]? 0:1;
        }
        if(arr[0]>arr[1])
            return 0;
        if(arr[n-1]>arr[n-2])
            return n-1;
        int l = 0, r = n-1;
        while(l<=r){
            int mid = l + (r-l)/2;
            if(mid > 0 && mid < n-1 && arr[mid-1] < arr[mid] && arr[mid] > arr[mid+1]){
                return mid;
            }else if(arr[mid+1]>arr[mid]){
                l = mid+1;
            }else{
                r = mid-1;
            }
        }
        return -1;
    }
}