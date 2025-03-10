import java.util.Scanner;

public class 문제_3_3 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in); // 키보드 입력
    int num1, num2; // 두 정수를 저장할 변수
    String oper; //연산자를 저장할 문자열
    double result = 0;

    // 정보 입력
    System.out.print("첫 번째 수 : ");
    num1 = sc.nextInt();
    System.out.print("두 번째 수 : ");
    num2 = sc.nextInt();
    System.out.print("연산자 : ");
    oper = sc.next();

    if (oper.equals("+")||oper.equals("-")||oper.equals("*")||oper.equals("/")) {
      if (oper.equals("+")) {
        //num1:3, num:5, oper : +
        // 3 + 5 = 8
//      System.out.println(num1+" + "+num2+" = "+(num1+num2));
        //System.out.println(num1+" "+oper+" "+num2+" = "+(num1+num2)); 가능
        result = num1 + num2;
      } else if (oper.equals("-")) {
//      System.out.println(num1+" - "+num2+" = "+(num1-num2));
        result = num1 - num2;
      } else if (oper.equals("*")) {
//      System.out.println(num1+" * "+num2+" = "+(num1*num2));
        result = num1 * num2;
      } else if (oper.equals("/")) {
//      System.out.println(num1+" / "+num2+" = "+(num1/(double)num2));
        result = num1 / num2;
      }
      System.out.println(num1 + " " + oper + " " + num2 + " = " + result);
    }
    else {
      System.out.println("마! 똑띠 입력안하나!");
    }

    //짧게도 만들어보기


  }
}
