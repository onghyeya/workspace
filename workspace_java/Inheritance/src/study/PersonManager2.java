package study;

public class PersonManager2 {
  public static void main(String[] args) {
    // 친구 객체가 10개 저장 될 수 있는 배열 생성
    Friend[] fs = new Friend[10];
    int cnt = 0;

    // 다형성 사용
    fs[cnt++] = new UnivFriend("김자바","010-1234-1234","생물학과");
    fs[cnt++] = new CompFriend("김사원","010-1212-1212","회계부");

    for (int i= 0; i<cnt; i++){
      fs[i].showInfo();
    }
  }
}
