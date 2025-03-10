package pratice;

//getter > 멤버변수 하나의 값을 리턴하는 메서드
//       > 메서드의 이름 : get변수명
//setter > 멤버변수 하나의 값을 변경시키는 메서드
//       > setter 메서드는 이름이 정해져있음
public class Man {
  String name;
  int age;
  String address;

  // 멤버 변수의 모든 값을 초기화 할 수 잇는 메서드
  public void setAllInfo(String name,int age,String address){
    this.name = name;
    this.age = age;
    this.address = address;
  }

  //멤버 변수 각각의 값을 변경하는 메서드 3개
  //setter 만드세요.

  public void setName(String name){
    this.name = name;
  }
  public void setAge(int age){
    this.age = age;
  }
  public void setAddress(String address){
    this.address = address;
  }

  //각 멤버변수의 값을 리턴하는 메서드 3개

  public String getName(){
    return name;
  }
  public int getAge(){
    return age;
  }
  public String getAddress(){
    return address;
  }

  //멤버변수의 모든 정보를 출력하는 메서드
  public void printInfo(){
    System.out.println("이름 : " + getName());
    System.out.println("나이 : " + getAge());
    System.out.println("주소 : " + getAddress());
  }

}
