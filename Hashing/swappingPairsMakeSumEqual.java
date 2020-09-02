//https://practice.geeksforgeeks.org/problems/swapping-pairs-make-sum-equal/0
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
		    int arr[] = new int[m];
		    int brr[] = new int[n];
		    for(int i=0;i<m;i++)
		        arr[i] = sc.nextInt();
	        for(int i=0;i<n;i++)
	            brr[i] = sc.nextInt();
            
            int s1=0,s2=0;
            for(int i=0;i<m;i++)
                s1+=arr[i];
            for(int i=0;i<n;i++)
                s2+=brr[i];
            
            int target = Math.abs(s1-s2);
            HashMap<Integer,Integer> hm = new HashMap();
            for(int i=0;i<m;i++){
                hm.put(target-arr[i],arr[i]);
            }
            int flag=0;
            for(int i=0;i<n;i++){
                if(hm.containsKey(brr[i])){
                    flag=1;
                    break;
                }
            }
            if(flag==1)
                System.out.println(1);
            else
                System.out.println(-1);
		}
	}
}