//https://practice.geeksforgeeks.org/problems/zero-sum-subarrays/0
import java.util.*;
import java.lang.*;
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
	        HashMap<Integer,Integer> hm = new HashMap();
	        int sum=0,c=0;
	        for(int i=0;i<n;i++){
	            sum+=arr[i];
	            if(sum==0)
	                c++;
                if(!hm.containsKey(sum))
                    hm.put(sum,1);
                else{
                    c += hm.get(sum);
                    hm.put(sum,hm.get(sum)+1);
                }
	        }
	        System.out.println(c);
		}
	}
}