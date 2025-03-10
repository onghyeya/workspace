package pratice_1;

import java.util.ArrayList;
import java.util.List;
import java.util.zip.DeflaterOutputStream;

public class TestStudent {
  public static void main(String[] args) {
    List<Student> students = new ArrayList<>();

    Student stu1 = new Student("hong",90,90);
    Student stu2 = new Student("lee",77,80);
    Student stu3 = new Student("park",82,92);

    students.add(stu1);
    students.add(stu2);
    students.add(stu3);

    // students 저장된 모든 정보
    for (Student e : students){
      System.out.println(e);
    }
    System.out.println();

    // 총점이 150점 이상만 출력
//    for (int i = 0; i<students.size(); i++){
//      if (students.get(i).getTotal()>=150){
//        System.out.println(students.get(i));
//      }
//    }

    for (Student e : students){
      if (e.getTotal()>=150){
        System.out.println(e);
      }
    }
    System.out.println();

    //모든 학생에 대한 평균점수 출력(한명 한명)
    int sum = 0;
    for (int i = 0; i<students.size(); i++){
    sum += students.get(i).getTotal();
    }
    double div = (double)sum/students.size();
    System.out.println(div);
    System.out.println();

    //총점이 1등인 학생의 모든 정보
    Student index = students.get(0);
    for (int i = 0; i<students.size(); i++){
      if (index.getTotal()<students.get(i).getTotal()){
         index = students.get(i);
      }
    }
    System.out.println(index);


  }
}
