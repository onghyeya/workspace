package pratice2;

import javax.naming.Name;
import java.net.http.HttpRequest;
import java.util.Scanner;

public class StudentManager {
  private Scanner sc;
  private Student[] students;
  private int index;

  public StudentManager(){
    sc = new Scanner(System.in);
    students = new Student[3];
    index = 0;
  }

  // 학생등록
  public void regStudent(){
    System.out.println("학생 등록을 시작합니다. 학생 정보를 입력하세요.");
    System.out.print("이름 : ");
    String name = sc.next();
    System.out.print("나이 : ");
    int age = sc.nextInt();
    System.out.print("연락처 : ");
    String tel = sc.next();
    System.out.print("학점 : ");
    String grade = sc.next();

    //입력 받은 정보로
    // 1. 학생을 생성
    Student stu = new Student(name,age,grade,tel);
    // 생성한 학생을 students 배열에 저장한다.
    // 숫자를 증가 시킬수있는 변수추가
    students[index++] = stu;
  }

  // 학생정보변경(연락처)
  public void setTelInfo() {
    System.out.print("변경 학생 : ");
    String name = sc.next();
    for (int i = 0; i<index; i++){
     if(students[i].getName().equals(name)){
       System.out.print("연락처 : ");
       students[i].setTel(sc.next());
     }
    }
    System.out.println("변경 완료 되었습니다.");
  }
  // 학생정보출력기능
  public void printStuInfo(){
    System.out.print("정보를 열람할 학생 : ");
    String name = sc.next();
    System.out.println("요청하신 학생의 정보입니다.");
    for (int i = 0;i < index; i++){
      if (students[i].getName().equals(name)){
        students[i].printStudent();
      }
    }
  }

  // 모든 학생 정보 출력기능
  public void printAllStuInfo(){
    System.out.println("모든 학생 정보입니다. 현재 총 학생 수는 " + index + " 명 입니다.");
    for (int i = 0; i < index; i++){
      students[i].printStudent();
      System.out.println();
    }
  }
}
