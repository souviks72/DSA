//https://practice.geeksforgeeks.org/problems/combination-sum-part-2/0

import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
    static ArrayList<String> ar = new ArrayList<>();
	public static void main (String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		while(T-->0){
		    int n = sc.nextInt();
		    int arr[] = new int[n];
		    for(int i=0;i<n;i++)
		        arr[i] = sc.nextInt();
	        int sum = sc.nextInt();
	        Arrays.sort(arr);
	        String op = "";
	        solve(arr,op,n,sum,0);
	        if(ar.size()==0){
	            System.out.println("Empty");
	        }else{
                for(int i=0;i<ar.size();i++){
    	            System.out.print("("+ar.get(i)+")");
                }  
	        }
	        
	        System.out.println();
	        ar = new ArrayList<>();
		}
	}
	
	public static void solve(int[] arr,String op,int n,int sum,int i){
	    if(i>=n)
	        return;
	    if(sum<0)
	        return;
	    if(sum==0){
	        op = op.trim();
	        if(ar.contains(op))
	            return;
	        ar.add(op);
	        return;
	    }
	    
	    String op2 = op+arr[i]+" ";
	    solve(arr,op2,n,sum-arr[i],i+1);
	    solve(arr,op,n,sum,i+1);
	}
}