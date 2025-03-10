package study;

// 국제 tv 연합 기구
public class TvTest {
  public static void main(String[] args) {
    Tv tv = new SamsungTV();
    tv.turnOn();
    tv.volumeUp();
    tv.volumeDown();
    tv.turnOff();

    SamsungTV[] a = new SamsungTV[3];
    a[0] =  new SamsungTV();

    Tv[] c = new Tv[3];
    c[0] = new SamsungTV();
    c[1] = new LgTV();


  }
}
