//https://practice.geeksforgeeks.org/problems/rotation/0
// SOLUTION ONLY WORKS FOR UNIQUE ARRAY
// IF ARRAY ELEMENTS ARE REPEATED USE LINEAR SEARCH

import java.io.*;

class GFG {
	public static void main (String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		while(T-->0){
		    int n = sc.nextInt();
		    
		    int arr[] = new int[n];
		    for(int i=0;i<n;i++)
		        arr[i] = sc.nextInt();
	        int l = 0, r = n - 1,min=0;
	        while(l<=r){
	            int mid = l + (r-l)/2;
	            
                if(mid>0 && mid<n-1 && arr[mid]<arr[mid+1] && arr[mid]<arr[mid-1]){
                    min = mid;
                    break;
                }else if(arr[0]>arr[mid]){
                    r = mid-1;
                }else{
                    l = mid+1 ;
                }
	            
	            
	        }
	        System.out.println(min);
		}
	}
}