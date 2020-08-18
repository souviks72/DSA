class Solution {
    public String addBinary(String a, String b) {
        String ans = "",carry="0";
        //int carry=0;
        int an = a.length(),bn = b.length(),i=an-1,j=bn-1;
        while(i>=0 && j>=0){
            char ca  = a.charAt(i);
            char cb = b.charAt(j);
            
            if(ca=='0' && cb=='0'){
                if(carry.equals("1")){
                    ans = "1"+ans;
                    carry="0";
                }else{
                    ans = "0"+ans;
                }
            }else if(ca=='1' && cb=='1'){
                if(carry.equals("1")){
                    ans = "1" + ans;
                }else{
                    ans = "0" + ans;
                }
                carry="1";
            }else if(ca=='1' || cb=='1'){
                if(carry.equals("1")){
                    ans = "0" +ans;
                }else{
                    ans = "1" + ans;
                }
            }
            i--;j--;
        }
        while(i>=0){
            char ca = a.charAt(i);
            if(ca=='1'){
                if(carry.equals("1"))
                    ans = "0" +ans;
                else
                    ans = "1" +ans;
            }else if(ca=='0'){
                if(carry.equals("1")){
                    ans = "1" +ans;
                }else{
                    ans = "0" +ans;
                }
                carry="0";
            }
            i--;
        }
        while(j>=0){
            char ca = b.charAt(j);
            if(ca=='1'){
                if(carry.equals("1"))
                    ans = "0" +ans;
                else
                    ans = "1" +ans;
            }else if(ca=='0'){
                if(carry.equals("1")){
                    ans = "1" +ans;
                }else{
                    ans = "0" +ans;
                }
                carry="0";
            }
            j--;
        }
        if(carry.equals("1"))
            ans = carry+ans;
        return ans;
    }
}