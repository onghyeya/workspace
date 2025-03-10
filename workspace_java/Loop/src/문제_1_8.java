import java.util.Scanner;

public class 문제_1_8 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int endNum;

    System.out.print("정수 입력 : ");
    endNum = sc.nextInt(); //임의의정수를 입력받아

    int i =1; //  반복 시작 숫자
    int x =0; // 짝수의 갯수를 저장할 변수
    // 1부터 endNum까지 반복
    while (i < endNum +1){
      // 숫자가 짝수라면..
      if (i%2==0){
        x++;
      }
      i++;// 반복을 한 번 할때마다 i를 1증가 시키다.
    }
    System.out.println(x);
  }
}
