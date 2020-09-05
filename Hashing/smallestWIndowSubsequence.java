//https://practice.geeksforgeeks.org/problems/smallest-window-in-a-string-containing-all-the-characters-of-another-string/0
import java.util.*;
import java.lang.*;
import java.io.*;

class GFG {
	public static void main (String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		while(T-->0){
		    String s = sc.next();
		    String t = sc.next();
		    
		    int[] hash_str = new int[256];
		    int[] hash_p = new int[256];
		    Arrays.fill(hash_str,0);
		    Arrays.fill(hash_p,0);
		    
		    int len1 = s.length();
		    int len2 = t.length();
		    
		    if(len2>len1){
		        System.out.println(-1);
		    }
		    else if(len2==1){
		        if(s.indexOf(t.charAt(0))>=0){
		            System.out.println(t);
		        }else
		            System.out.println(-1);
		    }else if(len1==len2){
		        if(s.equals(t)){
		            System.out.println(s);
		        }else
		            System.out.println(-1);
		    }else{
	            String x="";
    		    int start=0,start_index=-1,count=0, min_len = Integer.MAX_VALUE;
    		    
    		    for(int i=0;i<len2;i++){
    		        hash_p[t.charAt(i)]++;
    		    }
    		    
    		    for(int i=0;i<len1;i++){
    		        char ch = s.charAt(i);
    		        hash_str[ch]++;
    		        
    		        if(hash_p[ch]!=0 && hash_str[ch]<=hash_p[ch])
    		            count++;
    	            
    	            if(count==len2){
    	                
    	                while(hash_str[s.charAt(start)] > hash_p[s.charAt(start)] || hash_p[s.charAt(start)]==0){
    	                    if(hash_str[s.charAt(start)] > hash_p[s.charAt(start)])
    	                        hash_str[s.charAt(start)]--;
                            start++;
                            
    	                }
    	                
    	                int len = i - start + 1;
    	                if(min_len>len){
    	                    min_len = len;
    	                    start_index = start;
    	                    x = s.substring(start,start+min_len);
    	                } 
    	            }
    		    }
    		    if(start_index==-1)
    		        System.out.println(-1);
    	        else
    	            System.out.println(x);
		    }
		    
		}
	}
}