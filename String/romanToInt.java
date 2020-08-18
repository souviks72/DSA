class Solution {
    public int romanToInt(String s) {
        String order = "IVXLCDM";
        int[] val = {1,5,10,50,100,500,1000};
        
        int n = 0,i=0;
        for( i=0;i<s.length()-1;i++){
            char ch = s.charAt(i);
            int v = val[order.indexOf(ch)];
            int v2 = val[order.indexOf(s.charAt(i+1))];
            if(v<v2){
                n += (v2-v);
                i++;
            }else{
                n += v;
            }
        }
        if(i<s.length()){
            n+= val[order.indexOf(s.charAt(s.length()-1))];
        }
        return n;
    }
}