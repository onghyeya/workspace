import java.util.Scanner;

public class 문제_3_1 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String gender;

    System.out.print("성별 입력 : ");
    gender = sc.next();
    if (gender.equals("남")){
      System.out.println("남자입니다");
    } else if (gender.equals("여")) {
      System.out.println("여자입니다");
    }
    else{
      System.out.println("다시 입력하던가");
    }
  }
}
