//https://leetcode.com/problems/top-k-frequent-elements/
class Solution {
    static class Pair{
        int key,v;
        Pair(int key, int v){
            this.key = key;
            this.v = v;
        }
    }
    public int[] topKFrequent(int[] nums, int k) {
        PriorityQueue<Pair> pq = new PriorityQueue(new Comp());
        HashMap<Integer,Integer> hm = new HashMap();
        for(int i=0;i<nums.length;i++){
            int x = nums[i];
            if(hm.containsKey(x)){
                hm.put(x,hm.get(x)+1);
            }else{
                hm.put(x,1);
            }
        }
        for(Map.Entry<Integer,Integer> entry: hm.entrySet()){
            pq.add(new Pair(entry.getValue(),entry.getKey()));
            if(pq.size()>k)
                pq.remove();
        }
        int ans[] = new int[k];
        for(int i=0;i<k;i++){
            ans[i] = pq.peek().v;
            pq.remove();
        }
        return ans;
    }
    class Comp implements Comparator<Pair>{
        public int compare(Pair p1,Pair p2){
            int a = p1.key;
            int b = p2.key;
            return a - b;
        }
    }
}