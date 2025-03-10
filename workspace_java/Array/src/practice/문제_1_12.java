package practice;

import java.util.Scanner;

public class 문제_1_12 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("생성할 배열의 길이 입력 : ");
    int arrLength = sc.nextInt();

    int[] arr = new int[arrLength];

    //배열의 값 저장
    for (int i = 0; i < arr.length; i++){
      arr[i] = i+1;
    }

    //배열의 평균 계산 (합/개수)
    int sum = 0;
//    for (int i =0; i<arr.length; i++){
//      sum = sum + arr[i]; // 배열의 합
//    }

    for (int e : arr){
      sum = sum + e;
    }

    double avg = (double)sum / arr.length;
    System.out.println("배열 요소의 평균 : " + avg);
  }

  public static class 문제_1_16 {
    public static void main(String[] args) {
      // 자바에서 랜덤 숫자를 발생시키고 싶을 때는
      // Math.random(); 명령어를 사용
      // Math.random(); : 0 <= x <1.0 사이의 랜덤한 실수 값 생성
      double r = Math.random();
      System.out.println(r);

      //0부터 10까지의 랜덤한 정수를 생성
      int a = (int)(Math.random()*11);
      System.out.println(a);
    }
  }
}
