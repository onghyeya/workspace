package practice;

import java.util.Scanner;

public class 문제_1_8to9 {
  public static void test8(int num,int num1){
    System.out.println(num+","+num1);
  }
  public static void test9(int x, int y){
    System.out.println(x+y);
  }
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int num,num1;
    System.out.print("정수 입력 : ");
    num = sc.nextInt();
    System.out.print("정수 입력 : ");
    num1 = sc.nextInt();
    test8(num,num1);// 중요한건 서로의 자료형이 맞는가
    test9(num,num1);
  }
}
