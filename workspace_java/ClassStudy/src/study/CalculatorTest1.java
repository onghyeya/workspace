package study;

import java.util.Scanner;

public class CalculatorTest1 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);

    System.out.print("첫번째 수 : ");
    int num1 = sc.nextInt();
    System.out.print("두번째 수 : ");
    int num2 = sc.nextInt();
    System.out.print("연산자 : ");
    String oper = sc.next();

    //계산기 객체 생성
    Calculator1 cal = new Calculator1(num1,num2);
    // cal.setA(num1);
    // cal.setB(num2); 생성자 활용 방식

    switch(oper){
      case "+" :
        System.out.println(num1+oper+num2+"="+cal.getSum());
        break;
      case "-" :
        System.out.println(num1+oper+num2+"="+cal.getSub());
        break;
      case "*" :
        System.out.println(num1+oper+num2+"="+cal.getMulti());
        break;
      case "/" :
        System.out.println(num1+oper+num2+"="+cal.getDiv());
        break;
      default :
        System.out.println("연산자 다시 입력해라");
    }
  }
}
