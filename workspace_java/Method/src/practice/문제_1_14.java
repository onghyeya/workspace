package practice;

public class 문제_1_14 {
  public static void main(String[] args) {
    test14(15,1);
  }
  public static void test14(int x, int y){
//    int max = x>y?x:y;
//    int min = x>y?y:x;

    int max;
    int min;
    if(x>y){
      max=x;
      min=y;
    }
    else{
      max=y;
      min=x;
    }

    int c=0;
    for (int i=min+1; i<max; i++){
      if (i%5==0) {
        c = c + 1;
      }
    }
    System.out.println("5의 배수의 갯수 : " + c);


//    int i =  min+1; // 사이 정수
//    int c = 0;
//    while (i<max){
//      if (i%5==0){
//        c = c+1;
//      }
//      i++;
//    }
//    System.out.println(c);


  }
}
