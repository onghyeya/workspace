package study;

// 학생을 표현할 설계도
public class Student {
  String name;// 학생 이름
  int age; // 학생 나이
  int score; // 점수
  // 여기에 바로 초기화도 가능 그러나,

  // 이름 변경 메서드
  public void setName(String name1){
    name = name1;
  }

  public void setAge(int age1){
    age = age1;
  }

  public void setScore(int score1){
    score = score1;
  }

  // 이름 나이 점수를 모두 변경하는 메서드
  public void setAllInfo(String name1,int age1,int score1){
    name = name1;
    age = age1;
    score = score1;
  }


  // 학생 정보 출력 기능
  public void printInfo(){
    System.out.println("이름 : " + name);
    System.out.println("나이 : " + age);
    System.out.println("점수 : " + score);
  }
}
