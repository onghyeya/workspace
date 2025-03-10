package practice;

public class 문제_3_6 {
  public static void main(String[] args) {
    int[] arr = {1,5,3,7,9};
    System.out.println(test6(arr));

  }
  //정수형 배열을 매개변수로 받아
  //배열의 모든 요소 중 최대값을 리턴하는 메소드를 만들고 호출해보세요.
  // 가정 int[] arr = {1,5,3,7,9};
  // 최대값 : 9
  public static int test6(int[] arr){
    int max = arr[0];
    for (int i = 0; i<arr.length; i++){
      if (max<arr[i]){
        max = arr[i];
      }
    }
    return max;
  }
}
