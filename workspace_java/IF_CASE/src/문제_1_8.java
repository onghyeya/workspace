public class 문제_1_8 {
  public static void main(String[] args) {
    int a = 10;
    if (a == 10){
      System.out.println("A");
    }
    if (a >= 10){
      System.out.println("B");
    }
    else{
      System.out.println("C");
    }
    if (a >= 10) {
      System.out.println("D");
    }
    else if (a == 10){
      System.out.println("E");
    }
    else{
      System.out.println("G");
    }
    System.out.println("H");

    // A
    // B
    // D
    // H
  }
}
