package list_study;

import java.util.ArrayList;
import java.util.List;

//    System.out.println(p1.toString());
//    // 출력문에 객체명만 작성하면 객체명.toString() 메서드를 호출!
//    System.out.println(p2);
public class List_4 {
  public static void main(String[] args) {
    // Person 클래스의 객체를 다수 저장 할 수 있는 list 객체 생성
    List<Person> list = new ArrayList<>();

    // list 객체에 저장시킬 Person  클래스의 객체 생성
    Person p1= new Person("김자바",30,"울산시");
    Person p2= new Person("홍자바",20,"부산시");
    Person p3= new Person("이자바",40,"대구시");

    //위에서 만든 Person 객체를 list 에 저장
    list.add(p1);
    list.add(p2);
    list.add(p3);

    // list 에 저장된 모든 Person 객체의 정보 출력(toString() 활용)
    for (Person e : list){
      System.out.println(e.toString());
      //System.out.println(e); 가능
    }
    for (int i = 0; i<list.size(); i++){
      System.out.println(list.get(i).toString());
      //System.out.println(list.get(i)); 가능
    }
    System.out.println();

    // 울산시에 거주하는 모든 회원 정보출력
    for (Person p : list){
      if (p.getAddr().equals("울산시")){
        System.out.println(p);
      }
    }

    for (int i = 0; i<list.size(); i++){
      if (list.get(i).getAddr().equals("울산시")){
        System.out.println(list.get(i));
      }
    }


  }
}
