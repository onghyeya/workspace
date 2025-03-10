package practice;

public class 문제_2_9 {
  public static void main(String[] args) {
    int a = 5;
    System.out.println(test9(a));
  }
  public static int test9(int a){
    int sum = 0;
    for (int i = 1; i<a+1; i++){
      if (i%2==1){
        sum = sum+i;
      }
    }
    return sum;
  }
}
