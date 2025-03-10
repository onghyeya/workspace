public class 문제_1_6 {
  public static void main(String[] args) {
    int num = 1;
    int x = 0;

//    while (num<101){
//      if(num%3==0){
//        x = x+1;
//      }
//      num++;
//    }
//    System.out.println(x);

    for (int i = 1; i<101; i++){
      if(i%3==0){
        x = x+1;
      }
    }
    System.out.println(x);
  }
}
