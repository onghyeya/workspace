package practice;

import java.io.ObjectOutputStream;
import java.util.Scanner;

public class 문제_2_3 {
  public static void main(String[] args) {
    int c = test3(50,10);
    System.out.println(c);
  }
  public static int test3 (int a,int b){
    return a>b?a:b;
//    if (a>b){
//      return a;
//    }
//    else {
//      return b;
//    }
  }
}
