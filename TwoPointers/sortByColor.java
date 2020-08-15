public class Solution {
    public void sortColors(ArrayList<Integer> arr) {
        int n = arr.size();
        int count[] = new int[3];
        count[0] = 0;
        count[1] = 0;
        count[2] = 0;
        for(int i=0;i<n;i++){
            count[arr.get(i)]++;
        }
        int c=0;
        for(int i=0;i<3;i++){
            while(count[i]!=0){
                arr.set(c,i);
                c++;
                count[i] = count[i]-1;
            }
        }
    }
}