package practice;


import java.util.Arrays;

public class 문제_3_8 {
  public static void main(String[] args) {
    int[] arr = {1,5,3,7,5,8} ;
    int[] arr1 = {1,5,4};
    int[] result = test8(arr,arr1);
    System.out.println(Arrays.toString(result));

  }
  // 정수형 배열 두 개를 매개변수로 받아
  // 두 배열의 모든 요소를 갖는 새로운 배열을
  // 리턴하는 메소드를 만들고 호출해보세요
  public static int[] test8(int[] a,int[] b){
    int[] arr = new int[a.length+b.length];
    for (int i = 0; i<a.length; i++){
      arr[i] = a[i];
    }
    for (int i = 0; i <b.length; i++){
      arr[a.length+i] = b[i];
    }
    return arr;
  }
}
