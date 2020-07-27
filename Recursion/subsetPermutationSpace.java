//https://practice.geeksforgeeks.org/problems/permutation-with-spaces/0
import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
    static String t = "";
	public static void main (String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		while(T-->0){
		    String s = sc.next();
		    String op = s.substring(0,1);
		    String ip = s.substring(1,s.length());
		    getSubsets(ip,op);
		    System.out.println(t);
		    t="";
		}
	}
	
	public static void getSubsets(String ip,String op){
	    if(ip.length()==0){
	        t+= "("+op+")";
	        return;
	    }
	    String op1 = op + ip.charAt(0);
	    String op2 = op + " " + ip.charAt(0);
	    ip = ip.substring(1,ip.length());
	    
	    getSubsets(ip,op2);
	    getSubsets(ip,op1);
	}
}