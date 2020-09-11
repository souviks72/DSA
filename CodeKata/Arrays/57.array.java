import java.util.*;
public class Main {
    public static void main(String[] args) {
        Scanner obj = new Scanner(System.in);
        int n = Integer.parseInt(obj.next());
        int arr[] = new int[n];
        for(int i=0;i<n;i++){
            arr[i] = Integer.parseInt(obj.next());
        }
        int l=0,r=n-1,flag=0,p=-1;
        if(arr[0]<arr[1] && arr[0]<arr[n-1]){
            System.out.println(-1);
        }else if(arr[n-1]<arr[n-2]){
            System.out.println(n-1);
            
        }else{
            while(l<=r){
                int mid = l+(r-l)/2;
                if(mid-1>0 && arr[mid-1]>arr[mid]){
                    flag=1;
                    p=mid;
                    break;
                }else if(mid+1<n && arr[mid+1]<arr[mid]){
                    l = mid+1;
                }else{
                    r = mid-1;
                }
            }
            System.out.println(p);
        }
    }
}