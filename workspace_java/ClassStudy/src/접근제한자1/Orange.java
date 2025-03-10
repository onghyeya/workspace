package 접근제한자1;

// 1. 접근 제한자
// - 멤버변수 , 메서드, 클래스의 사용 범위를 지정
// 2. 접근 제한자의 종류 :  public > default > protected > private
// public 선언된 멤버변수와 메서드 : 같은 프로젝트라(project) 면 접근 가능
// default 선언된 멤버변수와 메서드 :  같은 패키지(package) 내에서 접근 가능, 키워드 작성 X
// private 선언된 멤버변수와 메서드 : 변수, 메서드를 선언한 클래스 안에서만 접근 가능

// 결론
// - 멤버 변수에는 무조건 private
// - 메서드는 무조건 public

public class Orange {
  private int a;
  int b;
  public int c;

  private int price;

  //setter
  public void setPrice(int price){
    if(price < 0){
      price = 0;
    }
    else{
      this.price = price;
    }
  }
  //getter



  private void aaa(){}
  void bbb(){}
  public void ccc(){}

}
