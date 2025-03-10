package practice;

import java.lang.invoke.MethodHandles;

public class 문제_1_11 {
  public static void main(String[] args) {
    test11(20,10);
  }
  public static void test11(int x,int y){
    if (x%2==0 && y%2==0){
      System.out.println("두 수는 짝수입니다");
    }
    else if (x%2==1 && y%2==1) {
      System.out.println("두 수는 홀수입니다");
    }
    else {
      System.out.println("한 수만 짝수입니다");
    }
  }
}
