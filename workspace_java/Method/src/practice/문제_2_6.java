package practice;

import javax.swing.text.Style;
import java.util.Scanner;

public class 문제_2_6 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int b = sc.nextInt();
    String c = test6(b);
    System.out.println(c);
  }
  public static String test6(int a){
    //숫자 > 문자열
    //String b = String.valueOf(10);
    return String.valueOf(a);

    //문자열 > 정수
    //int c = Integer.parseInt("10");
    //return a+"";
  }
}
