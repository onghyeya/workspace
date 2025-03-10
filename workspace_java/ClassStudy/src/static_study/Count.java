package static_study;

public class Count {
  // static 변수는 생성자에서 초기화 하지 않는다.
  // static 변수는 초기화 구문이 따로 존재
  static int cnt;

  // static 변수 초기화 구문
  static {
    cnt = 0; // 공용 변수
  }

  // 생성자 안에서 증가
  public Count(){
    //cnt = 0; static 변수는 생성자에서 초기화 x
    System.out.println("생성자 실행");
    cnt++;
    System.out.println("cnt = " + cnt);
  }
}
