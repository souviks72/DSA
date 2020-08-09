class Solution {
    public int peakIndexInMountainArray(int[] arr) {
        if(arr.length<=2)
            return -1;
        int p=-1,max = Integer.MIN_VALUE;
        for(int i=0;i<arr.length;i++){
            if(arr[i]>max){
                max = arr[i];
                p = i;
            }
        }
        return p;
    }
}