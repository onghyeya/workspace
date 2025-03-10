package pratice2;

public class MemberTest2 {
  public static void main(String[] args) {
    Member2 m1 = new Member2("홍혜원","onghye");
    boolean result = m1.login("hong","12345");
    if (result){
      System.out.println("로그인 완");
      m1.logout("hong");
    }
    else{
      System.out.println("id또는 password가 올바르지 않습니다.");
    }
  }
}
