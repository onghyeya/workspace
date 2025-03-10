import java.util.Scanner;

public class 문제_2_3 {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int num;
    int clapCnt = 0; // 박수의 갯수
    System.out.print("1~99 사이의 정수를 입력하시오 >>");
    num = sc.nextInt();

    //  십의 자리
    int tens = num/10;
    //  일의 자리
    int ones = num%10;

    if (num>0 && num <100) {
      //만약 십의 자리 수가 3,6,9면 박수 수를 1증가
      if (tens == 3 || tens == 6 || tens == 9){
        ++clapCnt;
      }
      //if (tens % 3 == 0 && tens != 0){}

      //만약 일의 자리 수가 3,6,9면 박수 수를 1증가
      if (ones == 3 || ones == 6 || ones == 9){
        ++clapCnt;
      }

      //clapCnt =0,1,2
      //0이면 박수없음
      //1이면 박수짝
      //2면 박수짝짝
    }
    switch(clapCnt){
      case 0:
        System.out.println("박수 안쳐잉");
        break;
      case 1:
        System.out.println("박수 짝");
        break;
      case 2:
        System.out.println("박수 짝짝");


    }
  }
}
