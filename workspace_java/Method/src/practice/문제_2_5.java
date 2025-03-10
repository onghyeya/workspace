package practice;

import javax.lang.model.util.ElementScanner6;
import javax.swing.*;
import javax.swing.text.Style;

public class 문제_2_5 {
  public static void main(String[] args) {
    String b = test5(77);
    System.out.println(b);

  }
  public static String test5(int a){
    if (a>=90){
      return "A";
    }
    else if (a>=70){
      return "B";
    }
    else {
      return "C";
    }

//    String str =  ""; 변수 하나를 선언하고 하는 방법
//    if (a>=90){str = "A"}
//    else if (a>=70){str = "B"}
//    else {str = "C"}
//    return str;
  }
}
