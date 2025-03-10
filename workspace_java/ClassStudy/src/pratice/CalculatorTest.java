package pratice;

import java.util.Scanner;

public class CalculatorTest {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    Calculator calcul = new Calculator();

    System.out.print("첫번째 수 : ");
    calcul.setNum(sc.nextInt());
    System.out.print("두번째 수 : ");
    calcul.setNum1(sc.nextInt());
    System.out.print("연산자 : ");
    calcul.setOperator(sc.next());
    calcul.setOper();



  }
}
