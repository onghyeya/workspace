package study;

// 클래스와 동일하게 앞글자 대문자 사용
// 클래스의 구성요소 (작성할 수 있는거) : 멤버변수, 메서드의 정의 , 생성자(설계도)
// 인터페이스의 구성요소 : 추상 메서드만(지침서)
public interface Print {
  // 메서드의 정의는 있지만, 내용부가 없는 메서드를 추상메서드라고 함.

  // 흑백 출력 기능
  public void print();

  // 컬러 출력 기능
  public void colorPrint();
}
