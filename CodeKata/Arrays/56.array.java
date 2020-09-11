import java.util.*;
public class Main {
    public static void main(String[] args) {
        //Getting input via STDIN
        Scanner obj = new Scanner(System.in);
        String a = obj.next();
        String b = obj.next();
         
        int m = a.length();
        int n = b.length(), flag=0;
        if(m!=n)
            System.out.println("no");
        else{
            int size = 256;
            boolean marked[] = new boolean[size];
            int map[] = new int[size];
            Arrays.fill(marked,false);
            Arrays.fill(map,-1);
            
            for(int i=0;i<m;i++){
                if(map[a.charAt(i)]==-1){
                    if(marked[b.charAt(i)]==true){
                        flag=1;
                        break;
                    }
                    marked[b.charAt(i)]=true;
                    map[a.charAt(i)] = b.charAt(i);
                    
                }else if(map[a.charAt(i)] != b.charAt(i)){
                    flag=1;break;
                }
                
            }
            if(flag==0)
                System.out.println("yes");
            else    
                System.out.println("no");
        }
        
    }
}