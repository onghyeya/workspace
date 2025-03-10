public class 문제_1_3 {
  public static void main(String[] args) {
    // 첫번째 방법
    for (int i =2; i<11; i=i+2){
      System.out.println(i);
    }

    // 두번째 방법
    for (int i = 2; i <11; i++){
      if (i%2==0){
        System.out.println(i);
      }
    }
  }
}
