package study;

public class StudentTest2 {
  public static void main(String[] args) {
    Student stu1 = new Student();
    stu1.printInfo();

    System.out.println();
    //학생 객체 stu1의 데이터 변경 : xxxx 안씀 xxxx
    stu1.name = "Lee";
    stu1.age = 30;
    stu1.score = 90;
    stu1.printInfo();

    System.out.println();

    // Student 객체  stu2 생성 :  oooo 사용 oooo
    Student stu2 = new Student();
      stu2.setName("Hong");
      stu2.setAge(29);
      stu2.setScore(78);
      stu2.printInfo();

    System.out.println();
    // Student 객체 stu3 생성 :  oooo 사용 oooo
    Student stu3 = new Student();
      stu3.setAllInfo("Kim",20,45);
      stu3.printInfo();
  }
}
