import java.util.Scanner;

public class 정수입력받기_2 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    //두 정수를 키보드로 입력받아,
    //입력받은 두 수의 합을 출력

    System.out.print("정수 1 입력 : ");
    int a = sc.nextInt();

    System.out.print("정수 2 입력 : ");
    int b = sc.nextInt();

    System.out.println("두 수의 합 : " + (a + b));

    //조건문, 반복문
  }
}
