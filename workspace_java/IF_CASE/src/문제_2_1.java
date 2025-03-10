import java.util.Scanner;

public class 문제_2_1 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int a,b,c;
    System.out.print("변1 : ");
    a = sc.nextInt();
    System.out.print("변2 : ");
    b = sc.nextInt();
    System.out.print("변3 : ");
    c = sc.nextInt();

    if(a+b>c && a+c>b && b+c>a){
      System.out.println("가능하다");
    }
    else {
      System.out.println("불가능하다");
    }

  }
}
