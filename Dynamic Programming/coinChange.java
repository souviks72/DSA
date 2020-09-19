//https://leetcode.com/problems/coin-change-2/submissions/
class Solution {
    public int change(int amount, int[] coins) {
        if(amount==0)
            return 1;
        int n = coins.length;
        int t[][] = new int[n+1][amount+1];
        for(int i=0;i<=n;i++){
            for(int j=0;j<=amount;j++){
                if(i==0){
                    t[i][j] = 0;
                }else if(j==0){
                    t[i][j] = 1;
                }else{
                    if(coins[i-1]<=j){
                        t[i][j] = t[i-1][j] + t[i][j - coins[i-1]];
                    }else{
                        t[i][j] = t[i-1][j];
                    }
                }
            }
        }
        return t[n][amount];
    }
}