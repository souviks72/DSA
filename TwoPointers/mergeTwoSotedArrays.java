//https://www.interviewbit.com/problems/merge-two-sorted-lists-ii/
public class Solution {
    public void merge(ArrayList<Integer> a, ArrayList<Integer> b) {
        int an = a.size();
        int bn = b.size();
        int i=0,j=0;
        while(i<an && j<bn){
            if(a.get(i)>b.get(j)){
                a.add(i,b.get(j));
                j++;
                an++;
            }else if(a.get(i)==b.get(j)){
                a.add(i,b.get(j));
                i++;
                j++;
            }else{
                i++;
            }
            
        }
        while(j<bn){
            a.add(b.get(j));
            j++;
        }
    }
}