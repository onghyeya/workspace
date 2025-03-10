package study;

// 대학 동창 정보
public class UnivFriend extends Friend{
  private String major;

  public UnivFriend(String name, String tel, String major) {
    super(name,tel);
    this.major = major;
  }

  public void showInfo(){ //오버라이딩 사용
    super.showInfo(); // 본인기준으로 호출하기 때문에 부모에서 호출하려면 super사용
    System.out.println("전공 : " + major);
  }
}
