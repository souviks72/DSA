import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
	public static void main (String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		while(T-->0){
		    int m = sc.nextInt();
		    int n = sc.nextInt();
		    String s = sc.next();
		    String st = sc.next();
		    int max = 0;
		    int[][] t = new int[m+1][n+1];
		    for(int i=0;i<=m;i++){
		        for(int j=0;j<=n;j++){
		            if(i==0|| j==0)
		                t[i][j] = 0;
	                else{
	                    char ch = s.charAt(i-1);
	                    char cj = st.charAt(j-1);
	                    if(ch==cj){
	                        t[i][j] = t[i-1][j-1]+1;
	                        max = Math.max(max,t[i][j]);
	                    }else{
	                        t[i][j] = 0;
	                    }
	                }
		        }
		    }
		    System.out.println(max);
		}
	}
}