package study;

// 선생님이랑 한거
public class Calculator1 {
  private int a;
  private int b;

  public Calculator1(int a, int b){
    this.a = a;
    this.b = b;
  }

  public void setA(int a){
    this.a = a;
  }
  public void setB(int b){
    this.b = b;
  }

  // 더한 결과를 리턴하는 기능
  public int getSum(){
    return a+b;
  }
  // 빼기
  public int getSub(){
    return a-b;
  }
  // 곱하기
  public int getMulti(){
    return a*b;
  }
  // 나누기
  public double getDiv(){
    return a/(double)b;
  }

}
