//https://practice.geeksforgeeks.org/problems/first-and-last-occurrences-of-x/0

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
	        
	        
            int a = first(arr,x);
            int b = last(arr,x);
            if(a!=-1 && b!=-1)
                System.out.println(a+" "+b);
            else if(a!=-1)
                System.out.println(a);
            else if(b!=-1)
                System.out.println(b);
            else
                System.out.println(-1);
		}
	}
	
	public static int first(int[] arr,int x){
	    int res = -1;
	    int l = 0, r = arr.length -1 ;
	    while(l<=r){
	        int mid = l + (r-l)/2;
	        if(arr[mid]==x){
	            res = mid;
                r = mid - 1;
            }else if(arr[mid]<x){
                l = mid+1;
            }else{
                r = mid-1;
            }
        }
        return res;
    }
	    
	
	
	public static int last(int[] arr,int x){
	    int res = -1;
	    int l = 0, r = arr.length-1;
	    while(l<=r){
	        int mid = l + (r-l)/2;
	        if(arr[mid]==x){
	            res = mid;
	            l = mid + 1;
            }else if(arr[mid]<x){
                l = mid+1;
            }else{
                r = mid-1;
            }
        }
        return res;
    }
	    
	
	
}