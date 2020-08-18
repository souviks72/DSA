//https://www.interviewbit.com/problems/max-continuous-series-of-1s/
public class Solution {
    public ArrayList<Integer> maxone(ArrayList<Integer> arr, int m) {
        String t=" ",s=" ";
        int window = m;
        int i=0,j=0,n = arr.size();
        int c=0,max=0;
        while(i<n){
            if(arr.get(i)==1){
                t+=i+",";
                i++;
                c++;
            }else if(window>0){
                t+=i+",";
                window--;
                i++;
                c++;
            }else if(window==0){
                
                if(c>max){
                    max = c;
                    s=t;
                }
                c=0;
                t=" ";
                j++;
                i=j;
                window=m;
            }
        }
        if(c>max){
            max = c;
            s=t;
        }
        s=s.trim();
        ArrayList<Integer> ans = new ArrayList();
        for(i=0;i<s.length();i++){
            int x = s.indexOf(',');
            String xt = s.substring(0,x);
            ans.add(Integer.parseInt(xt));
            if(x+1==s.length())
                break;
            s = s.substring(x+1);
        }
        return ans;
    }
}