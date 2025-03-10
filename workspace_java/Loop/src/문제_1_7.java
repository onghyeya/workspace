public class 문제_1_7 {
  public static void main(String[] args) {
//    int num = 1;
    int x = 0;

//    while (num<101){
//      if (num%5==0){
//        x++;
//        System.out.print(num+" ");
//      }
//      num++;
//    }
//    System.out.println();
//    System.out.println("5의 배수 갯수 : "+ x);

    for (int i = 1; i<101; i++){
      if(i%5==0){
        x++;
        System.out.print(i+" ");
      }
    }
    System.out.println();
    System.out.println("5의 배수 갯수 : "+ x);
  }
}
