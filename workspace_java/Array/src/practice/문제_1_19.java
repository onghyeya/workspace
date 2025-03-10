package practice;

import java.util.Arrays;

public class 문제_1_19 {
  public static void main(String[] args) {
    //정수 10개를 담을 수있는 배열 생성
    int[] arr1 = new int[10];
    //배열의 공간에 1~100까지의 정수를 저장
    for (int i = 0; i<arr1.length; i++){
      //1.0 <= x < 101.0 실수 >>(int)
      arr1[i] = (int)(Math.random()*100+1);
    }
    // 배열 데이터 확인을 위한 출력
    System.out.println(Arrays.toString(arr1));

    int max = arr1[0]; //0번째 요소를 가장 큰 값으로 가정
    int min = arr1[0]; //0번째 요소를 가장 작은 값으로 가정

    for (int i = 0; i<arr1.length; i++){
      // max보다 요소의 값이 클때 max에 요소를 저장
      if (max < arr1[i]){
        max = arr1[i];
      }
      if (min > arr1[i]){
        //min보다 요소의 값이 작을때 min에 요소를 저장
        min = arr1[i];
      }
    }
    System.out.println("가장 큰 값 : " + max);
    System.out.println("가장 작은 값 : " + min);
  }
}
