/*package whatever //do not write package name here */
//https://practice.geeksforgeeks.org/problems/find-all-four-sum-numbers/0
import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
    static class Pair{
        int a,b;
        Pair(int a,int b){
            this.a = a;
            this.b = b;
        }
    }
	public static void main (String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		while(T-->0){
		    int n = sc.nextInt();
		    int k = sc.nextInt();
		    int arr[] = new int[n];
		    for(int i=0;i<n;i++)
		        arr[i] = sc.nextInt();
	        String t="";
	        HashMap<Integer,Pair> hm = new HashMap<Integer,Pair>();
	        for(int i=0;i<n-1;i++){
	            for(int j=i+1;j<n;j++){
	                int sum = arr[i]+arr[j];
	                hm.put(k-sum,new Pair(arr[i],arr[j]));
	            }
	        }
	        
	        for(int i=0;i<n-1;i++){
	            for(int j=i+1;j<n;j++){
	                int sum = arr[i]+arr[j];
	                if(hm.containsKey(sum)){
	                    t += arr[i]+" "+arr[j]+" "+hm.get(sum).a +" "+hm.get(sum).b +"$ ";
	                }
	            }
	        }
	        t=t.trim();
	        
	        System.out.println(t);
		}
	}
}