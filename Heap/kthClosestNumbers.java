//https://leetcode.com/problems/find-k-closest-elements/submissions/
class Solution {
    static class Pair{
        int x,y;
        Pair(int a,int b){
            this.x = a;
            this.y = b;
        }
    }
    public List<Integer> findClosestElements(int[] arr, int k, int x) {
        PriorityQueue<Pair> pq = new PriorityQueue<Pair>(new MyComp());
        for(int i=0;i<arr.length;i++){
            int d = Math.abs(arr[i]-x);
            pq.add(new Pair(d,arr[i]));
            if(pq.size()>k)
                pq.remove();
        }
        List<Integer> l = new ArrayList();
        int i=0;
        while(i<k){
            Pair p = pq.remove();
            l.add(p.y);
            i++;
        }
           
        Collections.sort(l);
        return l;
    }
    
    class MyComp implements Comparator<Pair>{
    public int compare(Pair p1,Pair p2){
        int a = p1.x;
        int b = p2.x;
        if(a==b){
            if(p1.y < p2.y)
                return 1;
            else
                return -1;
        }
        return b-a;
    }
}

}