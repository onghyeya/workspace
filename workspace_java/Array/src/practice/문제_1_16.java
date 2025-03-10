package practice;

/*
* 이 메소드는 0~1까지 사이의 실수 중 랜덤한 수를 전달해준다
* 예를 들어 double d = Math.random();을 하면 0.0 < = d < 1.0 중
* 임의의 실수 값이 d에 할당된다
*
* 이를 활용하여 정수형 변수 I에 50<=I<100의 임의의 정수를 저장해 보라 .(배열 문제 아님)
* */
public class 문제_1_16 {
  public static void main(String[] args) {
    double r = Math.random();
    System.out.println(r);

    // 0부터 10까지의 랜덤한 정수를 생성
    // 0<= x < 11
    int d = (int)(Math.random()*11);
    System.out.println(d);
  }
}
