package study;

// 직장동료
public class CompFriend extends Friend {
  private String dept;

  public CompFriend(String name, String tel, String dept) {
    super(name,tel);
    this.dept = dept;
  }

  public void showInfo(){
    super.showInfo();
    System.out.println("부서 : " + dept);
  }
}
