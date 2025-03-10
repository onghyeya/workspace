package practice;

public class 문제_3_3 {
  public static void main(String[] args) {
    System.out.println(test3());
  }
  //Math.random() 메소드를 활용하여
  // 1~ 50의 수 중 랜덤한 정수를 리턴하는
  // 메소드를 만들고 호출해보자
  public static int test3(){
    int d = (int)(Math.random()*50+1);
    return d;
    //return (int)(Math.random()*50+1); > 더 짧게 만드는 방법
  }
}
