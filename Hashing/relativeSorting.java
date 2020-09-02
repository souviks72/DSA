//https://leetcode.com/problems/relative-sort-array/discuss/335217/Java-O(n*lgn)-1-ms-beats-100
class GFG {
	public static void main (String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		while(T-->0){
		    int m = sc.nextInt();
		    int n = sc.nextInt();
		    int arr[] = new int[m];
		    int brr[] = new int[n];
		    for(int i=0;i<m;i++)
		        arr[i] = sc.nextInt();
	        for(int i=0;i<n;i++)
	            brr[i] = sc.nextInt();
            
            HashMap<Integer,Integer> hm = new HashMap();
            for(int num: brr){
                hm.put(num,0);
            }
            
            int res[] = new int[m];
            int last = m-1;
            for(int num: arr){
                if(hm.containsKey(num)){
                    hm.put(num,hm.get(num)+1);
                }else{
                    res[last--] = num;
                }
            }
            int p=0;
            for(int num: brr){
                int c = hm.get(num);
                for(int i=0;i<c;i++)
                    res[p++] = num;
            }
            Arrays.sort(res,p,m);
            for(int num: res){
                System.out.print(num+" ");
            }
            System.out.println();
		}
	}
}