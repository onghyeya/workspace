/*
* 조건문 - switch case break 문
* 조건이 '범위'라면 if 사용이 코딩에 수월
* 조건이 '특정 값'이라면 switch문 사용이 수월
* */

public class Switch_1 {
  public static void main(String[] args) {
    int num = 2;
    // 조건이 맞은  case 부터 아래의 모든 내용 실행
    switch (num){
      case 1:
        System.out.println(1);
        break;
      case 2:
        System.out.println(2);
        System.out.println(2);
        break;
      case 3:
        System.out.println(3);
        break;
      // 더이상 선택지가 없기 때문에 break;를 사용할 필요가 없다.
      default :
        System.out.println(4);
    }
  }
}
