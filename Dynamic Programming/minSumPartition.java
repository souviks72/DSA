//https://practice.geeksforgeeks.org/problems/minimum-sum-partition/0
class Solution
{

	public int minDiffernce(int arr[], int n) 
	{ 
	    int sum=0;
	    for(int i=0;i<n;i++)
	        sum += arr[i];
        int s = (int)Math.floor(sum/2);
        boolean t[][] = new boolean[n+1][s+1];
        
        for(int i=0;i<=s;i++)
            t[0][i] = false;
        for(int i=0;i<=n;i++)
            t[i][0] = true;
        
        for(int i=1;i<=n;i++){
            for(int j=1;j<=s;j++){
                if(arr[i-1]<=j){
                    t[i][j] = t[i-1][j] || t[i-1][j-arr[i-1]];
                }else{
                    t[i][j] = t[i-1][j];
                }
            }
        }
        int min = Integer.MAX_VALUE;
        for(int i=0;i<=s;i++){
            if(t[n][i]){
                min = Math.min(min, sum - 2*i);
            }
           
        }
        return min;
	} 
}
