package practice;

public class 문제_3_5 {
  public static void main(String[] args) {
    int[] a = {5,1,7,10};
    test5(a);
  }
  // 정수형 배열을 매개변수로 받아 배열의
  // 모든 요소를 출력하는 메소드를 만들고 호출하세요.
  public static void test5(int[] arr){
    for (int i = 0; i<arr.length; i++){
      System.out.println(arr[i]);
    }
  }
}
