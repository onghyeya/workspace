package practice;

import java.util.Scanner;

public class 문제_2_2 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
      int num,num1;
      num =  sc.nextInt();
      num1 =  sc.nextInt();
      int c = test2(num,num1);
    System.out.println(c);
  }
  public static int test2(int a,int b){
    return a * b;
  }
}
