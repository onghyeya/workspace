package study;

// acc1.initAcc("111-222",10000,"김자반"); > 사용 X

public class AccountTest {
  public static void main(String[] args) {
    // 계좌 생성
    // 객체 생성 문법 : 클래스명 객체명 = new 생성자호출;
    Account acc1 = new Account();
    acc1.printAccInfo();

    //1. 초기값 세팅인데 그전에 다른 코드 올수 있음
    //2. 초기 세팅을 여러번 호출할 수 있음

  }
}
