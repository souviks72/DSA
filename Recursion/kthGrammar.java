//https://leetcode.com/problems/k-th-symbol-in-grammar/submissions/
class Solution {
    public int kthGrammar(int N, int K) {
        if(N==1 && K==1)
            return 0;
        else if(N==2){
            if(K==1)
                return 0;
            else if(K==2)
                return 1;
        }
        
        int mid = (int)Math.pow(2,N-1)/2;
        if(K<=mid){
            return kthGrammar(N-1,K);
        }else{
            return kthGrammar(N-1,K-mid) == 0? 1:0;
        }
    }
}