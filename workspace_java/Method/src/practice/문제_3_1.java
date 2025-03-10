package practice;

public class 문제_3_1 {
  public static void main(String[] args) {
    test1(7);
  }
  //정수 하나를 매개변수로 받아
  // 해당 정수의 구구단을 출력하는 메소드를 만들고 호출해보세요
  public static void test1 (int a){
    int x;
    for (int i = 1; i<10; i++){
      x = a*i;
      System.out.println(a + " * " + i + " = " + x);
    }
  }
}
