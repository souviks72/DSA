//https://practice.geeksforgeeks.org/problems/subset-sum-problem/0
class Solution{
    static int equalPartition(int n, int arr[])
    {
        int sum = 0;
        for(int i=0;i<n;i++)
            sum += arr[i];
        
        if(sum%2==1)
            return 0;
        
        int s = sum/2;
        boolean t[][] = new boolean[n+1][s+1];
        for(int i=0;i<=s;i++)
            t[0][i] = false;
        for(int i=0;i<=n;i++)
            t[i][0] = true;
            
        for(int i=1;i<=n;i++){
            for(int j=1;j<=s;j++){
                if(arr[i-1]<=j){
                    t[i][j] = t[i-1][j] || t[i-1][j - arr[i-1]];
                }else{
                    t[i][j] = t[i-1][j];
                }
            }
        }
        if(t[n][s]==true)
            return 1;
        else
            return 0;
    }
}