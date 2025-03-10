package study;

public class Man {
  String name;

  public Man(){}// 부모클래스의 매개변수가 없는 생성자

  public Man(String name) {
    this.name = name;
  }

  public void tellName(){
    System.out.println("name is "+name);
  }
}
