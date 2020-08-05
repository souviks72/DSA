//https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
class Solution {
    public int countNegatives(int[][] arr) {
        int m = arr.length;
        int n = arr[0].length;
        int sum = 0;
        int i = 0, j = n-1;
        while(i<m && j>=0){
            if(arr[i][j] < 0){
                sum = sum + (m-i);
                j--;
            }else if(arr[i][j]>=0){
                while(i<m && arr[i][j]>=0)
                    i++;
                if(i<m && arr[i][j]<0)
                    sum = sum + (m-i);
                j--;
            }
        }
        return sum;
    }
}