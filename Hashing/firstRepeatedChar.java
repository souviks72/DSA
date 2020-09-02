//https://practice.geeksforgeeks.org/problems/find-first-repeated-character/0
import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
	public static void main (String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		while(T-->0){
		    String s = sc.next();
		    int flag=0;
		    HashSet<Character> hs = new HashSet();
		    for(int i=0;i<s.length();i++){
		        char ch = s.charAt(i);
		        if(hs.contains(ch)){
		            System.out.println(ch);
		            flag=1;
		            break;
		        }else{
		            hs.add(ch);
		        }
		    }
		    if(flag==0)
		        System.out.println(-1);
		}
	}
}