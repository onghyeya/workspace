package pratice2;

public class MemberService {

  public boolean login(String id,String password){
//    if (id.equals("hong")&&password.equals("12345")){
//      return true;
//    }
//    else{
//      return false;
//    }
    return id.equals("hong")&&password.equals("12345");
  }
  public void logout(String id){
    System.out.println("꺼진다아ㅏ아");
  }
}
