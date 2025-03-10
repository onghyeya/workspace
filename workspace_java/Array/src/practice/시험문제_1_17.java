package practice;

public class 시험문제_1_17 {
  public static void main(String[] args) {
    int[] lotto = new int[6];

    /*0을 포함하지 않고 1-45까지의 랜덤정수 저장*/
    for (int i = 0; i < lotto.length; i++){
      lotto[i] = (int)(Math.random()*45+1);
    }

    // 배열의 요소 출력
    for (int i = 0; i < lotto.length; i++){
      System.out.print(lotto[i] + " ");
    }

    //중복 없이는 어떻게??

  }
}
