package study;

public class LgTV implements Tv {
  @Override
  public void turnOn() {
    System.out.println("LG 티비 등장★");
  }

  @Override
  public void turnOff() {
    System.out.println("LG 티비 퇴장..");

  }

  @Override
  public void volumeUp() {
    System.out.println("LG 티비 소리 잘들림!!");

  }

  @Override
  public void volumeDown() {
    System.out.println("LG 티비 소리 안들림..");

  }
}
