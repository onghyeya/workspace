import java.util.Scanner;

public class 문제_3_4 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int x;
    int y;
    String a;

    System.out.print("첫번째 수 : ");
    x = sc.nextInt();
    System.out.print("두번째 수 : ");
    y = sc.nextInt();
    System.out.print("연산자 : ");
    a = sc.next();

    switch (a){
      case "+" :
        System.out.println(x+" + "+y+" = "+(x+y));
        break;
        case "-" :
        System.out.println(x+" - "+y+" = "+(x-y));
        break;
        case "*" :
        System.out.println(x+" * "+y+" = "+(x*y));
        break;
        case "/" :
        System.out.println(x+" / "+y+" = "+(x/y));
        break;
      default:
        System.out.println("계산을 하겠다는거예여 말겠다는거예여");
    }
  }
}
