package pratice2;

public class Member2 {
  private String name;
  private String id;
  private String password;
  private int age;

  public Member2(String name, String id){
    this.name = name;
    this.id = id;
  }

  public boolean login(String id, String password){
    this.id = id;
    this.password = password;
    if(id.equals("hong") && password.equals("12345")){
      return true;
    }
    else {
      return false;
    }
  }
  public void logout(String password){
    System.out.println("로그아웃 되었습니다.");
  }


}
