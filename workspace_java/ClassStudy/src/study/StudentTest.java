package study;

public class StudentTest {
  public static void main(String[] args) {
    // Student 클래스 객체 stu1 생성
    Student stu1 = new Student();

    // Student 클래스 객체 stu2 생성
    Student stu2 = new Student();

    // stu1 객체의 이름을 '홍길동', 나이는 20살로 변경
    stu1.name = "홍길동";
    stu1.age = 20;

    stu1.setName("이순신");
    stu1.setAge(999);
    stu1.setScore(999);

    // stu1 객체의 모든 정보 출력 (1)
    stu1.printInfo();

    // stu1 객체의 모든 정보 출력 (2)
    System.out.println(stu1.name);
    System.out.println(stu1.age);
    System.out.println(stu1.score);

    System.out.println();

    // stu2 객체의 이름 '홍혜원', 나이는 27살, 점수는 30점 변경
    stu2.setName("홍혜원");
    stu2.setAge(27);
    stu2.setScore(1010101);

    stu2.setAllInfo("홍혜원",27,10000);
    stu2.printInfo();

  }
}
