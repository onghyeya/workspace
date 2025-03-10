package 접근제한자1;

public class OrangeTest1 {
  public static void main(String[] args) {
    Orange orange = new Orange();
    //orange.a;       a 변수는 private 라서 다른 클래스에서 접근 불가
    //orange.aaa();   위와 같은 이유
    orange.b = 10; // default 라서 같은 패키지안은 접근 가능
    orange.c = 15; // public 이라서 같은 프로젝트안 접근 가능
    orange.setPrice(-1000);
  }
}
