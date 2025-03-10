package practice;

public class 문제_1_10 {
  public static void main(String[] args) {
    // test() 메서드의 인자로 82가 전달되었다.
    test10(82);
  }

  //test10(2); > 짝수입니다
  //test10(1); > 홀수입니다 출력
  public static void test10(int num){
    // 삼항 연산자로 하는 방법
    System.out.println( num%2==0?"짝수입니다":"홀수입니다" );

    // if (num%2==0){
    //   System.out.println("짝수입니다");
    // }
    // else {
    //   System.out.println("홀수입니다");
    // }
  }
}
