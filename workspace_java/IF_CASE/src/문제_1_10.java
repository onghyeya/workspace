import java.beans.beancontext.BeanContextServicesListener;
import java.util.Scanner;

public class 문제_1_10 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int a,b,c ;
    int min, mid, max;

    System.out.print("첫번째 수 : ");
    a = sc.nextInt();
    System.out.print("두번째 수 : ");
    b = sc.nextInt();
    System.out.print("세번째 수 : ");
    c = sc.nextInt();

    //숫자 크기 비교
    // a가 가장 클 경우
    if (a>b && a>c){
      max = a;
      // b가 c 클 경우
      if(b>c){
      mid = b;
      min = c;
      }
      //그렇지 않을 경우
      else{
        mid = c;
        min = b;
      }
    }

    //그렇지 않고 b가 가장 클 경우
    else if (b>a && b>c) {
      max = b;
      if(a>c){
        mid = a;
        min = c;
      }
      else{
        mid = c;
        min = a;
      }
    }
    //c가 가장 클 경우
    else{
      max = c;
      if (a>b){
        mid = a;
        min = b;
      }
      else{
        mid = b;
        min = a;
      }
    }

    // 출력
    System.out.println(max+">"+mid+">"+min);
  }
}
