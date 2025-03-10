package practice;

import java.nio.channels.NonWritableChannelException;

public class 문제_2_10 {
  public static void main(String[] args) {
    String b = "오후가 되니 정말 진심으로 집에 가고싶군요.배부르다 꺼억";
    System.out.println(b.length());
    System.out.println(test10(b));

  }
  //매개변수로 문자열 데이터 하나를 받아, 해당 문자열의 길이가 짝수 일 때는 true를 리턴하고,
  //홀수 일 때는 false를 리턴하는 메서드를 선언하고 사용해보세요.
  public static boolean test10(String a){
      return a.length()%2==0; // > 제일 간단히 표현 boolean은 원래 true/false로 나타내기때문에 생략가능.

//    return a.length()%2==0?true:false;

//    if (a.length()%2==0){
//      return true;
//    }
//    else {
//      return false;
//    }
  }
}
