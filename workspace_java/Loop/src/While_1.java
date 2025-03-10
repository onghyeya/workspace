/*
* 반복문 (While,for)
* 특정 코드를 원하는 횟수만큼 반복적으로 실행하는 코드
* while : ~~하는 동안
*
* 반복 시작 조건;
* while(반복조건){
*   반복 실행할 코드
*   반복 실행할 코드...
*   반복을 파기할 조건
* }
*
* */
public class While_1 {
  public static void main(String[] args) {
    int num = 0; // 반복 시작 조건

    // num이 11보다 작을 동안 반복하겠다
    while (num < 5){ //반복 조건(참이 조건)
      System.out.print("java"); // 반복 실행할 코드
      num++; // 반복 파기 조건(while 안 위치 상관없음 : 통상적으로 마지막에 넣음)
    }

    // 변수 , 자료형, 연산자, 조건문 (if), 반복문 계속 씀
  }
}
