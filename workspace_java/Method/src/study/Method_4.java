package study;


public class Method_4 {
  public static void main(String[] args) {
    printSum(15,13);
    //printSum(10); 매개변수 자료형 불일치!
    //printSum(30,"java"); 매개변수 자료형 불일치!
  }
  // 두 수의 합을 출력하는 메서드 정의
  public static void printSum(int num1,int num2){
    System.out.println(num1+num2);
  }
}
