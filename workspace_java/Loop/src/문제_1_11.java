import java.util.Scanner;

public class 문제_1_11 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    // 키보드로 두 정수를 입력받아
    // 입력 받은 두 정수 사이의 모든 정수의 합을 출력하라

    int num1,num2;

    System.out.print(" 정수 1 : ");
    num1 = sc.nextInt();
    System.out.print(" 정수 2 : ");
    num2 = sc.nextInt();

    // 두 수 중 큰 수와 작은 수를 구분
    int min = num1 > num2 ? num2 : num1;
    int max = num1 > num2 ? num1 : num2;

    //num1 : 1 , num2 : 10 가정
    int i = min/*num1*/ + 1; // 사이 값
    int sum = 0; // 합을 저장할 변수
    while (i<max/*num2*/){
      sum = sum+i;
      i++;
    }
    System.out.println(sum);
  }
}
