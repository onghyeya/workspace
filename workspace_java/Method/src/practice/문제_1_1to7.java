package practice;

import java.util.Scanner;

public class 문제_1_1to7 {
  public static void main(String[] args) {
    test1();
    test2(20);
    test3("집에가서 잘거야");
    test4(15,78);
    test5(2,2,4);
    test6(30,11);
    test7("나는 문어","꿈을 꾸는 문어 예에..");
  }
  public static void test1(){
    System.out.println("안녕하세요");
  }
  public static void test2(int num){
    System.out.println(num);
  }
  public static void test3(String text){
    System.out.println(text);
  }
  public static void test4(int num1,int num2){
    System.out.println(num1+num2);
  }
  public static void test5(int num1,int num2,int num3){
    System.out.println(num1*num2*num3);
  }
  public static void test6(double num1,int num2){
    System.out.print(num1/num2);
    System.out.println(num1%num2);
  }
  public static void test7(String text,String text1){
    System.out.print(text+" ");
    System.out.println(text1);
  }
}
