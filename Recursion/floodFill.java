//https://practice.geeksforgeeks.org/problems/flood-fill-algorithm/0

import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
	public static void main (String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		while(T-->0){
		    int n = sc.nextInt();
		    int m = sc.nextInt();
		    int arr[][] = new int[n][m];
		    for(int i=0;i<n;i++){
		        for(int j=0;j<m;j++)
		            arr[i][j] = sc.nextInt();
		    }
		    int x = sc.nextInt();
		    int y = sc.nextInt();
		    int K = sc.nextInt();
		    floodfill(arr,x,y,K,n,m,arr[x][y]);
		    for(int i=0;i<n;i++){
		        for(int j=0;j<m;j++)
		            System.out.print(arr[i][j] + " ");
		    }
            System.out.println();
		    
		}
	}
	
	public static void floodfill(int[][] arr,int x,int y,int K,int n,int m,int color){
	    if(x<0 || y<0 || x>=n || y>=m || arr[x][y]!=color)
	        return;
        arr[x][y] = K;
        floodfill(arr,x-1,y,K,n,m,color);
        floodfill(arr,x+1,y,K,n,m,color);
        floodfill(arr,x,y+1,K,n,m,color);
        floodfill(arr,x,y-1,K,n,m,color);
	}
}