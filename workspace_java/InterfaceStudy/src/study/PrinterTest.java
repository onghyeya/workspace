package study;

public class PrinterTest {
  public static void main(String[] args) {
    SamsungPrinter p = new SamsungPrinter();
    p.print();
    p.colorPrint();
    // 다형성과 비슷
    Print p1 = new SamsungPrinter();
    p1.colorPrint();
    p1.print();
  }
}
