//https://practice.geeksforgeeks.org/problems/print-n-bit-binary-numbers-having-more-1s-than-0s/0

import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
	public static void main (String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		while(T-->0){
		    int n = sc.nextInt();
		    int ones = 1, zeros = 0;
		    n--;
		    String op = "1";
		    preFix(ones,zeros,n,op);
		    System.out.println();
		}
	}
	
	public static void preFix(int ones,int zeros,int n,String op){
	    if(n==0){
	        System.out.print(op+" ");
	        return;
	    }
	    
	    if(ones == zeros){
	        op += "1";
	        ones++;
	        n--;
	        preFix(ones,zeros,n,op);
	    }else if(ones > zeros){
	        String op1 = op + "1";
	        String op2 = op + "0";
	        n--;
	        preFix(ones+1,zeros,n,op1);
	        preFix(ones,zeros+1,n,op2);
	    }
	}
}