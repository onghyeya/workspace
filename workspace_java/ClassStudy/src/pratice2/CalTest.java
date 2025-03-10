package pratice2;

import java.util.Scanner;

public class CalTest {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int num,num1;
    String oper;
    System.out.print("첫 번째 수 : ");
    num = sc.nextInt();
    System.out.print("두 번째 수 : ");
    num1 = sc.nextInt();
    System.out.print("연산자 : ");
    oper = sc.next();

    switch (oper){
      case "+" :
        Add add = new Add();
        add.setValue(num,num1);
        System.out.println(num + oper + num1 + "=" + add.calculate());
        break;
      case "-" :
        Sub sub = new Sub();
        sub.setValue(num,num1);
        System.out.println(num + oper + num1 + "=" + sub.calculate());
        break;
      case "*" :
        Mul mul = new Mul();
        mul.setValue(num,num1);
        System.out.println(num + oper + num1 + "=" + mul.calculate());
        break;
      case "/" :
        Div div = new Div();
        div.setValue(num,num1);
        System.out.println(num + oper + num1 + "=" + div.calculate());
        break;
      default:
        System.out.println("연산자 다시 입력부탁");
    }
  }
}
