package pratice_1;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Test2 {
  public static void main(String[] args) {
    List<Integer> list = new ArrayList<>();
    Scanner sc = new Scanner(System.in);
    for (int i = 0; i < 5; i++){
      list.add(sc.nextInt());
    }
    int sum = 0;
    for (int i = 0; i<list.size(); i++){
      sum = sum+ list.get(i);
    }
    System.out.println(sum);
  }
}
