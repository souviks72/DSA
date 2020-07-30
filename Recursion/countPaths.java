//https://practice.geeksforgeeks.org/problems/number-of-paths/0
import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
    static int c = 0;
	public static void main (String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		while(T-->0){
		    int m = sc.nextInt();
		    int n = sc.nextInt();
		    countPaths(m-1,n-1,0,0);
		    System.out.println(c);
		    c = 0;
		}
	}
	
	public static void countPaths(int m,int n,int x,int y){
	    if(x==m && y==n){
	        c++;
	        return;
	    }else if(x>m || y>n){
	        return;
	    }
	    if(x<m)
	        countPaths(m,n,x+1,y);
        if(y<n)
            countPaths(m,n,x,y+1);
	}
}