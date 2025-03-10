package practice;

public class 문제_1_15 {
  public static void main(String[] args) {
    test15(3 , "이제 1교시 지남..");
  }
  // 정수 : 5 문자열 : 안녕하세요
  // 문자열을 5번 반복
  public static void test15(int num , String str){

    for (int i = 0; i<num; i++){
      System.out.println(str);
    }

  }
}
