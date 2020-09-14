class Solution {
    static class Pair{
        int key;
        String v;
        Pair(int key, String v){
            this.key = key;
            this.v = v;
        }
    }
    public String frequencySort(String s) {
        int l = s.length();
        String[] arr = s.split("");
        HashMap<String,Integer> hm = new HashMap<String,Integer>();
        
        for(int i=0;i<l;i++){
            if(hm.containsKey(arr[i])){
                hm.put(arr[i],hm.get(arr[i])+1);
            }else{
                hm.put(arr[i],1);
            }
        }
        PriorityQueue<Pair> pq = new PriorityQueue(new Comp());
        for(Map.Entry<String,Integer> en: hm.entrySet()){
            String key = en.getKey();
            int v = en.getValue();
            Pair p = new Pair(v,key);
            pq.add(p);
        }
        StringBuilder sb=new StringBuilder();
        while(pq.size()!=0){
            Pair p = pq.remove();
            int freq = p.key;
            String x = p.v;
            while(freq!=0){
                sb.append(x);
                freq--;
            }
        }
        return sb.toString();
    }
    class Comp implements Comparator<Pair>{
        public int compare(Pair p1,Pair p2){
            return p2.key - p1.key;
        }
    }
}