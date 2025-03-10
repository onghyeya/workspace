package pratice_1;

import java.util.ArrayList;
import java.util.FormatFlagsConversionMismatchException;
import java.util.List;

public class Test4 {
  public static void main(String[] args) {
    List<Integer> list = new ArrayList<>();
    for (int i = 0; i< 10; i++){
      list.add((int)(Math.random()*100+1));
    }
    System.out.println(list);

    int cnt = 0;
    for (int e :list){
      if (e%2==0){
        cnt = cnt+1;
      }
    }
    System.out.println(cnt);
  }
}
