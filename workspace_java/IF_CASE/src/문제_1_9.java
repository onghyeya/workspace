import java.util.Scanner;

public class 문제_1_9 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int num1, num2;
    int min; // num1 과 num2 중 작은수를 저장할 변수
    int max; // num1 과 num2 중 큰 수를 저장할 변수

    System.out.print("첫번째 수 : ");
    num1 = sc.nextInt();
    System.out.print("두번째 수 : ");
    num2 = sc.nextInt();
    if(num2>num1){
      min = num2;
      max = num1;
    }
    else {
      min = num1;
      max = num2;
    }

    System.out.println(min+">"+max);

  }
}
