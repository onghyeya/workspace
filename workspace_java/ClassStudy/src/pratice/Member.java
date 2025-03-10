package pratice;

public class Member {
  String name;
  String id;
  String password;
  int age;

  // 회원의 모든 정보를 변경하는 기능

  public void setAllInfo(String name,String id,String password,int age){
    // 이 클래스에서 정의된 name,id,password,age
    this.name = name;
    this.id = id;
    this.password = password;
    this.age = age;
  }


  public void printInfo(){
    System.out.println("이름 : " + name);
    System.out.println("ID : " + id);
    System.out.println("Password : " + password);
    System.out.println("나이 : " + age);
  }
}
