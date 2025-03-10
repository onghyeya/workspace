package practice;

import java.util.Arrays;

public class 문제_3_9 {
  public static void main(String[] args) {
    int[] arr1 = {1,1,2,5,4,6,7,8,10};
    int[] result = test9(arr1);
    System.out.println(Arrays.toString(result));

  }
  //정수형 배열 하나를 매개변수로 받아
  //배열의 요소 중 홀수를 제거한 새로운 배열을 리턴하는 메소드를 만들어보세요.
  //배열은 배열 생성시 크기가 정해지면 크기 변경이 불가
  public static int[] test9(int [] arr){
    // 예시
    // arr = [1,2,3,4,5,6]
    // newArr = [2,4,6]
    // 매개변수로 전달된 배열에서 짝수만 갖는 새로운 배열 생성

    // 0. 생성할 배열의 크기 구함
    // - 매개변수로 전달된 배열의 요소에서 짝수의 갯수를 파악
    int arrLength = 0;
    for (int i = 0; i< arr.length; i++){
      if (arr[i]%2 == 0){
        arrLength++;
      }
    }

    // 1. 배열 생성
    int[] newArr = new int[arrLength];

    //2. 매개변수로 전달된 배열의 요소 중 짝수만 newArr배열에 저장
    int index = 0; // newArr의 index를 파악하기 위한 변수
    for (int i = 0; i<arr.length; i++){
      if (arr[i]%2==0){
        newArr[index++] = arr[i];
      }
    }
    return newArr;
  }
}
