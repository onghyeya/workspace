package study;

public class SamsungTV implements Tv {

  @Override
  public void turnOn() {
    System.out.println("삼성 티비 등장★");
  }

  @Override
  public void turnOff() {
    System.out.println("삼성 티비 퇴장..");
  }

  @Override
  public void volumeUp() {
    System.out.println("삼성 소리 잘들림!!");
  }

  @Override
  public void volumeDown() {
    System.out.println("삼성 소리 안들림..");
  }
}
