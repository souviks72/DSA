/*package whatever //do not write package name here */
//https://practice.geeksforgeeks.org/problems/array-subset-of-another-array/0
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
            
            HashMap<Integer,Integer> hm = new HashMap();
            for(int num: arr){
                if(hm.containsKey(num)){
                    hm.put(num,hm.get(num)+1);
                }else{
                    hm.put(num,1);
                }
            }
            int flag=0;
            for(int i=0;i<n;i++){
                int a = brr[i];
                if(!hm.containsKey(a) ||hm.get(a)==0){
                    flag=1;
                    break;
                }else{
                    hm.put(a,hm.get(a)-1);
                }
            }
            if(flag==1)
                System.out.println("No");
            else
                System.out.println("Yes");
		}
	}
}