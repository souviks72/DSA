//https://www.geeksforgeeks.org/count-of-subsets-with-sum-equal-to-x/
import java.io.*;
import java.lang.*;

class GFG {
    
    static int count(int s, int arr[])
    {
        int n = arr.length;
        
        int t[][] = new int[n+1][s+1];
        for(int i=0;i<=s;i++)
            t[0][i] = 0;
        for(int i=0;i<=n;i++)
            t[i][0] = 1;
            
        for(int i=1;i<=n;i++){
            for(int j=1;j<=s;j++){
                if(arr[i-1]<=j){
                    t[i][j] = t[i-1][j] + t[i-1][j - arr[i-1]];
                }else{
                    t[i][j] = t[i-1][j];
                }
            }
        }
        return t[n][s];
    }
	public static void main (String[] args) {
	    int a[]={1,1,1,1};
	    System.out.println(count(1,a));
		//code
	}
}