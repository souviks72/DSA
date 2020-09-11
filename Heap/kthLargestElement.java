//https://leetcode.com/problems/kth-largest-element-in-an-array/submissions/
//https://www.geeksforgeeks.org/implement-priorityqueue-comparator-java/
class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> q = new PriorityQueue();
        for(int i=0;i<nums.length;i++){
            int x = nums[i];
            q.add(x);
            if(q.size()>k)
                q.poll();
        }
        return q.poll();
    }
}