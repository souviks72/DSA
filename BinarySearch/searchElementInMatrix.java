//https://practice.geeksforgeeks.org/problems/search-in-a-matrix/0
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
		    int arr[][] = new int[m][n];
		    for(int i=0;i<m;i++){
		        for(int j=0;j<n;j++){
		            arr[i][j] = sc.nextInt();
		        }
		    }
		    int target = sc.nextInt();
		    int i=0,j=n-1,flag=0;
		    while(i<m && j>=0){
		        if(arr[i][j]==target){
		            flag = 1;
		            break;
		        }else if(arr[i][j]>target){
		            j--;
		        }else if(arr[i][j]<target){
		            i++;
		        }
		    }
		    if(flag==1){
		        System.out.println(1);
		    }else{
		        System.out.println(0);
		    }
		}
	}
}