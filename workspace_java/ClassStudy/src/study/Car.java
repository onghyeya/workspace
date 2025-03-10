package study;

/*
* 자동차를 객체로 만들기 위해 자동차 설계도 작성!
* 클래스의 구성 요소 : 데이터(변수), 기능(메서드 정의만), 생성자
* 클래스 안에서 선언한 변수 : 멤버변수 , 필드
* 메서드 안에서 선언한 변수 : 지역변수(local variable) >  매개변수도 지역변수 중 1
* -- 멤버 변수 vs 지역 변수 --
*  - ' 지역변수 '는 반드시 초기화 필요!
*  - ' 멤버변수 '는 초기화 하지 않으면 기본값으로 초기화(0,null 등등)가 자동 진행됨.
* */
public class Car {
  //데이터 (자동차가 가져야 하는 정보)
  String carName; //자동차 명
  int price; // 자동차 가격

  //시동거는 기능
  public void powerOn(){
    System.out.println("시동 걸기 부릉부릉");
  }

  //브레이크를 밟는 기능
  public void takeBrake(){
    System.out.println("끼이이이익");
  }

}
