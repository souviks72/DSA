//PRINT ALL SUBSETS OF A GIVEN STRING
import java.util.*;
public class Main {
    public static void main(String[] args) {
        String s = "abc";
        String op="";
        subsets(s,op);
    }
    
    public static void subsets(String ip,String op){
        if(ip.length()==0){
            System.out.println(op);
            return;
        }
        
        String op1 = op;
        String op2 = op + ip.charAt(0);
        ip = ip.substring(1,ip.length());
        subsets(ip,op1);
        subsets(ip,op2);
    }
}