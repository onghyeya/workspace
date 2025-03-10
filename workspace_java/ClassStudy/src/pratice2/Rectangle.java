package pratice2;

public class Rectangle {
  private int x1;
  private int y1;
  private int x2;
  private int y2;

  // 디폴트 생성자
  public Rectangle(){}
  //값을 설정하는 생성자
  public Rectangle(int x1, int y1, int x2, int y2) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }

  // 좌표설정
  public void set(int x1,int y1,int x2,int y2){
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
  }
  // 사각형 넓이 리턴
  public int square(){
    int square = (x2-x1) * (y2-y1);
    return square;
  }
  // 좌표와 넓이 등 직사각형 정보의 화면 출력
  public void show(){
    System.out.print("좌표 : ("+ x1 + "," + y1 +"),(" + x2 + "," + y2+ ")");
    System.out.println(" 넓이 : " + square());
  }

  //인자로 전달된 객체 r 과 현 객체가 동일한 넓이면 ture 리턴
  public boolean equals(Rectangle r){
//    if (square()==r.square()){
//      return true;
//    }
//    else {
//      return false;
//    }
    // 현객체 넓이 == r 객체의 넓이 (넓이구하는 자료형이 int 라서 "=="연산자 사용가능)
    return square()==r.square();
  }
}
