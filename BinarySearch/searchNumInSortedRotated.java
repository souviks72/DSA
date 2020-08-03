//https://leetcode.com/problems/search-in-rotated-sorted-array/
class Solution {
    public int search(int[] arr, int target) {
        int n = arr.length;
        if(n==0)
            return -1;
        if(n<=2){
            if(arr[0]==target)
                return 0;
            if(n==2 && arr[1]==target)
                return 1;
            return -1;
        }
        if(arr[0]<arr[1] && arr[0]<arr[n-1]){
            return binSearch(arr,0,n-1,target);
        }
        if(arr[n-1]<arr[0] && arr[n-1]<arr[n-2]){
            if(arr[n-1]==target)
                return n-1;
            return binSearch(arr,0,n-2,target);
        }
        int l = 0,r=n-1,p=-1;
        while(l<=r){
            int mid = l+(r-l)/2;
            if(mid>0 && mid<n-1 && arr[mid]<arr[mid-1] && arr[mid]<arr[mid+1]){
                p = mid;
                break;
            }else if(arr[0]>arr[mid]){
                r = mid -1 ;
            }else{
                l = mid + 1;
            }
        }
        if(p==-1)
            return -1;
        if(target<=arr[n-1]){
            return binSearch(arr,p,n-1,target);
        }else{
            return binSearch(arr,0,p-1,target);
        }
        
    }
    
    public int binSearch(int[] arr,int l,int r,int target){
        if(l<0 || r>arr.length-1)
            return -1;
        while(l<=r){
            int mid = l + (r-l)/2;
            if(arr[mid] == target)
                return mid;
            else if(arr[mid]<target){
                l = mid + 1;
            }else{
                r = mid - 1;
            }
        }
        return -1;
    }
}