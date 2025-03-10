package pratice;

// 문제 푸는 거라서 한번에 클래스 한거임 실무에서는 절대 안됨
// protected : private + 해당 클래스의 자식클래스는 접근 허용
public class A {
  protected int n;

  public int getN(){
    return n;
  }
  public void setN(int i){
    n = i;
  }
}

class B extends A{
  public String s;
  public int m;
  protected char c;

  public void setC(char ch){
    c = ch;
  }

  public char getC(){
    return c;
  }
}

class C extends B{
  public double d;
}



