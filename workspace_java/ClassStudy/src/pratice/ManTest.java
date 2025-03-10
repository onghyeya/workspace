package pratice;

public class ManTest {
  public static void main(String[] args) {
    //setter 활용
    Man man = new Man();
    man.setName("홍길동");
    man.setAge(10);
    man.setAddress("울산광역시");
    man.printInfo();

    System.out.println();

    Man man1 = new Man();
    man1.setAllInfo("홍길길",20,"부산광역시");
    man1.printInfo();

    System.out.println();

    //getter 활용
    //이름 데이터 출력
    System.out.println(man1.name);
    System.out.println(man1.getName());
  }
}
