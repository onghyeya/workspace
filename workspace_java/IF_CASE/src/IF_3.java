import java.util.Scanner;

public class IF_3 {
  public static void main(String[] args) {
    //키보드로 정수 두개를 입력 받아,
    //입력 받은 두수의 합이 10이상이면서
    //짝수는 아닐 경우에만 "참"이라는 문자열을 출력
    Scanner sc = new Scanner(System.in);
    int a;
    int b;

    System.out.print("첫번째 수 : ");
    a = sc.nextInt();
    System.out.print("두번째 수 : ");
    b = sc.nextInt();
    System.out.println("결과 값 : ");

    // 결과 출력
    //이상, 초과, 이하, 미만
    if(a+b>=10 && (a+b)%2!=0){
      System.out.println("참");

      //순서대로 기록하는 습관.
    }

  }
}
