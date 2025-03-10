package practice;

public class 문제_3_4 {
  public static void main(String[] args) {
    System.out.println(test4(5));
    //boolean result = test4(7);
    //System.out.println(result);
    //if(test(8)/result) > 조건이 true이기 때문에 if문이 실행된다
  }
  //정수 하나를 매개변수로 받아,
  // 매개변수가 짝수면 true, 홀수면 false를 리턴하는 메소드를 만들고 활용해보자.
  public static boolean test4(int a){
    return a%2==0;
  }
}
