package practice;

import java.util.Arrays;
import java.util.Scanner;

public class 문제_1_13 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int a = sc.nextInt();
    int b = sc.nextInt();
    test13(a,b); // 자료형이 같기 때문에 들어갈수잇음. == int num = a;/int num1 = b;

//    test13(5,16);
  }
  public static void test13(int num, int num1){
  // 두정수 사이의 정수 출력
    // 가정 num = 1 num1 = 10
    //num = min/max num1 = max/min
    //x = num/num1+1 > 사이 정수 반복되야함

    // if문 사용한 것
//    int max;
//    int min;
//
//    if (num>num1){
//      max = num;
//      min = num1;
//    }
//    else {
//      max = num1;
//      min = num;
//    }

    int max = num>num1?num:num1;
    int min = num>num1?num1:num;
    int x = min+1;// 굳이 지정 안해줘도 됨.
    for (int i = x; i<max; i++){
      System.out.print(i + " ");
    }


  }
}
