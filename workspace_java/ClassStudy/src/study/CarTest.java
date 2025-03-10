package study;

//Car class 의 내용을 실행하기 위한 class
public class CarTest {
  public static void main(String[] args) {
    // Car class 를 활용하여 객체를 생성
    // 객체 생성 문법
    // - 클래스명 객체명 = new  클래스명();
    // * 객체명 : instance 전체  == 인스턴스(instance) : 하나하나 특정지을때 == 참조 변수명
    // new :  새로운 인스턴스(객체)를 생성해주세요

    // car1이라는 인스턴스를 생성 (붕어빵)
    Car car1 = new Car();

    //car1 인스턴스의 데이터 접근 방법
    //객체명.변수명;
    System.out.println(car1.carName);
    System.out.println(car1.price);

    // 객체에 존재하는 변수의 값을 변경
    car1.carName = "아반떼";
    car1.price = 10000000;
    System.out.println(car1.carName);
    System.out.println(car1.price + " 원");

    // 메서드 사용법
    // 객체명.메서드호출;
    car1.powerOn();
    car1.takeBrake();
  }
}
