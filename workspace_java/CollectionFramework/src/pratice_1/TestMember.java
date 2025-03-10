package pratice_1;

import java.util.ArrayList;
import java.util.List;

public class TestMember {
  public static void main(String[] args) {
    List<Member> members = new ArrayList<>();

    Member m1 = new Member("java","123456","김자바",20);
    Member m2 = new Member("ong","456789","이자바",20);
    Member m3 = new Member("hyeya","789123","홍자바",15);

    members.add(m1);
    members.add(m2);
    members.add(m3);


    // 모든 회원 나이 합
    int sum = 0;
    for (int i = 0; i<members.size(); i++){
      sum = sum + members.get(i).getAge();
    }
    System.out.println("나이 합 : "+ sum);

    // java 지우기
    for (int i =0; i<members.size(); i++){
      if (members.get(i).getId().equals("java")){
        members.remove(i);
        break;
      }
    }
    System.out.println(members);

  }
}
