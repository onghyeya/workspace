package pratice;

public class ManTest2 {
  public static void main(String[] args) {
    Man m1 = new Man();
    m1.setAllInfo("홍길동", 30, "울산시");

    Man m2 = new Man();
    m2.setAllInfo("유관순", 20, "서울시");

    //m1과 m2중 나이가 많은 사람 출력
    //getter  > 데이터를 받아오는것
    //m1.getAge() :  m1에 기록된 age 의 값을 가져옴
    if (m1.getAge()> m2.getAge()){
      System.out.println(m1.getName());
    }
    else {
      System.out.println(m2.getName());
    }

    //m1 객체의 나이가 30이면
    //m1 객체의 이름을 이순신으로 변경하세요
    if (m1.getAge()==30){
      m1.setName("이순신");
    }
  }
}
