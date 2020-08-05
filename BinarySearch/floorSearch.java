//https://practice.geeksforgeeks.org/problems/floor-in-a-sorted-array/0

import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
	public static void main (String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		while(T-->0){
		    int n = sc.nextInt();
		    int target = sc.nextInt();
		    int[] arr = new int[n];
		    for(int i=0;i<n;i++){
		        arr[i] = sc.nextInt();
		    }
		    if(arr[0]>target){
		        System.out.println(-1);
		    }else{
		        int res = -1;
    		    int start = 0, end = n-1;
    		    while(start<=end){
    		        int mid = start + (end-start)/2;
    		        if(arr[mid]==target){
    		            res = mid;
    		            break;
    		        }else if(arr[mid]<target){
    		            res = mid;
    		            start = mid+1;
    		        }else{
    		            end = mid-1;
    		        }
    		    }
    		    System.out.println(res);
		    }
		    
		}
	}
}