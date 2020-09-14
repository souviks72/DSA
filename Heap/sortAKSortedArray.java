//https://practice.geeksforgeeks.org/problems/nearly-sorted-algorithm/0
import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
	public static void main (String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		while(T-->0){
		    int n = sc.nextInt();
		    int k = sc.nextInt();
		    int arr[] = new int[n];
		    for(int i=0;i<n;i++){
		        arr[i] = sc.nextInt();
		    }
		    PriorityQueue<Integer> pq = new PriorityQueue();
		    int c=0,i=0;
		    while(i<k){
		        pq.add(arr[i++]);
		    }
		    for(i=k;i<n;i++){
		       pq.add(arr[i]);
		       arr[c] = pq.remove();
		       c++;
		    }
		    while(pq.size()!=0)
		        arr[c++] = pq.remove();
	        for( i=0;i<n;i++)
	            System.out.print(arr[i]+" ");
            System.out.println();
		}
	}
}