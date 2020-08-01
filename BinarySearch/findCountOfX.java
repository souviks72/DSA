//https://practice.geeksforgeeks.org/problems/number-of-occurrence/0
// COunt first and last occurence and then count = last -first +1
/*package whatever //do not write package name here */

import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
	public static void main (String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		while(T-->0){
		    int n = sc.nextInt();
		    int x = sc.nextInt();
		    int arr[] = new int[n];
		    for(int i=0;i<n;i++)
		        arr[i] = sc.nextInt();
	        int a = first(arr,x,n);
	        int b = last(arr,x,n);
	        if(a!=-1 && b!=-1)
	            System.out.println(b-a+1);
            else if(a==-1)
                System.out.println(b);
            else if(b==-1)
                System.out.println(a);
            else
                System.out.println(-1);
		}
	}
	
	public static int first(int[] arr,int x,int n){
	    int l = 0, r = n-1, res=-1;
	    while(l<=r){
	        int mid = l + (r-l)/2;
	        if(arr[mid]==x){
	            res = mid;
	            r = mid -1;
	        }else if(x<arr[mid])
	            r = mid-1;
            else if(x>arr[mid])
                l = mid+1;
	    }
	    return res;
	}
	
	public static int last(int[] arr,int x,int n){
	    int l = 0, r = n-1, res=-1;
	    while(l<=r){
	        int mid = l + (r-l)/2;
	        if(arr[mid]==x){
	            res = mid;
	            l = mid +1;
	        }else if(x<arr[mid])
	            r = mid-1;
            else if(x>arr[mid])
                l = mid+1;
	    }
	    return res;
	}
}