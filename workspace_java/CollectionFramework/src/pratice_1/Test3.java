package pratice_1;

import java.util.ArrayList;
import java.util.List;

public class Test3 {
  public static void main(String[] args) {
    List<String> name = new ArrayList<>();
    name.add("홍길동");
    name.add("김길동");
    name.add("이길동");
    for (String e: name){
      if (e.equals("홍길동")){
        System.out.println(e);
      }
    }
  }
}
