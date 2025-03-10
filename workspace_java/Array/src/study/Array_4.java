package study;

// 배열이 자료형이라는 의미
// 자료형이 다르면 값 저장 못함
public class Array_4 {
  public static void main(String[] args) {
    int[] arr1 = {1,2,3};
    int a = 5;

    // a = arr1; 자료형 불일치!
    a = arr1[1];

    String[] arr2 = {"java", "house"};
    int[] arr3 = {1,5,7};
    // arr3 = arr2;  자료형 불일치!

    //String abc = arr2; 자료형 불일치!

    int[] arr4 = {5,10};
    //arr4가 arr3와 같은 값을 가짐
    arr4 = arr3; // arr4 = {1,5,7};

  }
}
