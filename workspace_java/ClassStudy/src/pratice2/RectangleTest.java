package pratice2;

public class RectangleTest {
  public static void main(String[] args) {
    Rectangle r = new Rectangle();
    Rectangle s = new Rectangle(1,1,2,3);

    r.show();
    s.show();
    System.out.println("S 사각형 넓이 : " + s.square());
    r.set(-2,2,-1,4);
    r.show();
    System.out.println("R 사각형 넓이 : " + r.square());
    // 같은 자료형이기 때문에 s가 들어올수있고
    // 그에 따른 조건 결과가 ture 이기에 if 문 출력가능
    if (r.equals(s))
      System.out.println("두사각형 같음");
  }
}
