import java.util.Scanner;

public class 문제_2_2 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int xPos,yPos;
    System.out.print("점(x,y)의 좌표를 입력하시오 >>");
    xPos = sc.nextInt();
    yPos = sc.nextInt();

    if (xPos>=50 && xPos<=100 && yPos>=50 && yPos<=100){
      System.out.println("사각형 안에 점이 있어요");
    }
    else {
      System.out.println("없는데요..");
    }

  }
}
