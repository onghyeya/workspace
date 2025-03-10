package study;

import java.util.List;

public class PersonManager {
  public static void main(String[] args) {
    // 인맥관리 프로그램은 대학동창과 직장동료의 정보를 관리할 수 있는 프로그램이다.
    // 이 프로그램은 최대 10명의 인맥 정보를 관리할 수 있다.
    // 인맥관리 프로그램은 지인의 정보를 저장할 수 있고,
    // 저장된 모든 지인의 정보를 확인할 수도 있어야 한다.

    // 대학동창을 5명 저장할 수 있는 배열생성
    UnivFriend[] univFriends = new UnivFriend[5];
    // 대학동창이 저장될 배열의 index 정보
    int ucnt = 0 ;

    // 직장동료를 5명 저장할 수 있는 배열생성
    CompFriend[] compFriends = new CompFriend[5];
    int ccnt = 0;

    // 대학동창을 생성 + 생성한 대학 동창 객체를 univFriends 에 저장
    univFriends[ucnt++] = new UnivFriend("김자바","010-1234-1234","생물학과");
    univFriends[ucnt++] = new UnivFriend("이자바","010-2222-2222","방송학과");

    // 직장동료를 생성 + 생성한 직장 동료 객체를 compFriends 에 저장
    compFriends[ccnt++] = new CompFriend("김대리","010-1111-1111","인사부");
    compFriends[ccnt++] = new CompFriend("이사원","010-1212-1212","영업부");

    // 저장된 대학 동창 정보 출력
    for (int i = 0; i<ucnt; i++){
      univFriends[i].showInfo();
      System.out.println();
    }
    // 저장된 직장동료 정보 출력
    for (int i = 0; i<ccnt; i++){
      compFriends[i].showInfo();
      System.out.println();
    }
  }
}
