package practice;

public class 문제_1_10 {
  public static void main(String[] args) {
    int[] arr = {1,2,3,4,5,6,7,8};
    int x=0;
    // for-each문
    for (int e : arr){
      if (e%2==0){
        x++;
      }
    }
    System.out.println();
    // 기본 for 문
    for (int i = 0; i<arr.length; i++){
      if (arr[i]%2==0){
        x = x+1;
      }
    }

    System.out.println("짝수 갯수 : " + x);
  }
}
